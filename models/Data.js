const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  songs: [
    {
      title: {
        type: String,
      },
      artist: {
        type: String,
      },
      genre: {
        type: String,
      },
      subGenre: {
        type: String,
      },
      releaseDate: {
        type: Date,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Data = mongoose.model("data", DataSchema);
