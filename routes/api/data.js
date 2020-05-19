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
    const data = await Data.find();
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
    const data = await Data.findOne({ user: req.user.id });

    // Pull out songs
    const song = data.songs.find((song) => song.id === req.params.id);

    // Make sure song exists
    if (!song) {
      return res.status(404).json({ msg: "Song does not exist" });
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
router.post(
  "/songs/update/:id",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("artist", "Artist is required").not().isEmpty(),
      check("genre", "Genre is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const data = await Data.findOne({ user: req.user.id });

      // Pull out songs
      const song = data.songs.find((song) => song.id === req.params.id);

      if (!song) res.status(404).json({ msg: "Song does not exist" });
      else song.title = req.body.title;
      song.artist = req.body.artist;
      song.genre = req.body.genre;
      song.subGenre = req.body.subGenre;
      song.releaseDate = req.body.releaseDate;

      await data.save();

      res.json(data);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    POST api/data/add
// @desc     Add songs
// @access   Private
router.post(
  "/add",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("artist", "Artist is required").not().isEmpty(),
      check("genre", "Genre is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, artist, genre, subGenre, releaseDate } = req.body;

    const newSong = {
      user: req.user.id,
      title,
      artist,
      genre,
      subGenre,
      releaseDate,
    };

    try {
      // Using upsert option (creates new doc if no match is found):
      let data = await Data.findOneAndUpdate(
        { user: req.user.id },
        { $set: newSong },
        { new: true, upsert: true }
      );

      data.songs.unshift(newSong);

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
      return res.status(404).json({ msg: "Song doesn't exist" });
    }
    data.songs = data.songs.filter(({ id }) => id !== req.params.id);

    await data.save();

    res.json({ msg: "Song removed" });
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

module.exports = router;
