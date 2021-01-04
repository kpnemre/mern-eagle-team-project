const Comment = require("../models/comment");

exports.postComment = async (req, res) => {
  const { text } = req.body;

  // Save Comments
  const comment = new Comment({
    text,
    userEmail: req.decodedUser.email,
    userName: req.decodedUser.firstName,
  });
  await comment.save();
  res.send(comment);
};
exports.getAllComments = async (req, res) => {
  const allComments = await Comment.find();
  res.status(200).json({ allComments });
  //res.send("yusuf");
};
