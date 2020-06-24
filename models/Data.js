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
        required: true,
      },
      isbn: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      published_date: {
        type: Date,
      },
      publisher: {
        type: String,
      },
      updated_date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Data = mongoose.model("data", DataSchema);
