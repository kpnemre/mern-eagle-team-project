const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
  commentText: {
    type: String,
    required: false,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Comments = mongoose.model("comment", CommentsSchema);
