const Comment = require("../models/comment");

exports.postComment = async (req, res) => {
  const { commentText } = req.body;

  // Save Comments
  const comment = new Comment({
    commentText,
    userEmail: req.decodedUser.email,
  });
  await comment.save();
  res.send(comment);
};
exports.getAllComments = async (req, res) => {
  const allComments = await Comment.find();
  res.status(200).json({ allComments });
  //res.send("yusuf");
};
