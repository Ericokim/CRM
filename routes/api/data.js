const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Data = require("../../models/Data");
const User = require("../../models/User");

// @route    GET api/data
// @desc     Get all songs
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const data = await Data.findOne();

    if (!data) {
      return res.status(400).json({ msg: "There is no data" });
    }

    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/data/songs/:id
// @desc     Get song by ID
// @access   Private
router.get("/songs/:id", auth, async (req, res) => {
  try {
    const data = await Data.findOne();

    // Pull out songs
    const song = data.songs.find((song) => song.id === req.params.id);

    // Make sure song exists
    if (!song) {
      return res.status(404).json({ msg: "Does not exist" });
    }

    data.songs = data.songs.find(({ id }) => id === req.params.id);

    return res.json(data.songs);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    POST api/data/songs/update/:id
// @desc     Update individual song
// @access   Private
router.post("/songs/update/:id", auth, async (req, res) => {
  try {
    const data = await Data.findOneAndUpdate({ user: req.user.id });

    // Pull out songs
    const song = data.songs.find((song) => song.id === req.params.id);

    if (!song) res.status(404).json({ msg: "Does not exist" });
    else song.title = req.body.title;
    song.isbn = req.body.isbn;
    song.author = req.body.author;
    song.description = req.body.description;
    song.published_date = req.body.published_date;
    song.updated_date = req.body.updated_date;
    song.publisher = req.body.publisher;

    await data.save();

    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/data/add
// @desc     Add songs
// @access   Private
router.put(
  "/add",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("author", "Author is required").not().isEmpty(),
      check("publisher", "Publisher is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      isbn,
      author,
      description,
      published_date,
      publisher,
      updated_date,
    } = req.body;

    const newSong = {
      user: req.user.id,
      title,
      isbn,
      author,
      description,
      published_date,
      publisher,
      updated_date,
    };

    try {
      // Using upsert option (creates new doc if no match is found):
      let data = await Data.findOneAndUpdate(
        { user: req.user.id },
        { $set: newSong },
        { new: true, upsert: true }
      );

      await data.songs.unshift(newSong);
      await data.save();
      res.json(data);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/data/songs/:id
// @desc     Delete a song
// @access   Private
router.delete("/songs/:id", auth, async (req, res) => {
  try {
    const data = await Data.findOne({ user: req.user.id });

    const song = data.songs.find((song) => song.id === req.params.id);

    if (!song) {
      return res.status(404).json({ msg: "Doesn't exist" });
    }
    // data.songs = data.songs.filter(({ id }) => id !== req.params.id);

    data.songs = data.songs.filter(
      (exp) => exp._id.toString() !== req.params.id
    );

    await data.save();
    return res.status(200).json(data);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

module.exports = router;
