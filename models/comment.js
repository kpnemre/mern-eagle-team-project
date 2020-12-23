const mongoose = require("mongoose");
const User = require("../models/user");

const CommentsSchema = new mongoose.Schema({
  userEmail: {
    type: String,
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

module.exports = Comments = mongoose.model("comment", CommentsSchema);
