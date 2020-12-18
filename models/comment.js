const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
  commentAuth: {
    type: String,
    required: true,
  },
  commentText: {
    type: String,
    required: false,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Comments = mongoose.model("comments", CommentsSchema);
