const Comment = require("../models/comment");

exports.postComment = async (req, res) => {
  const { text, author } = req.body;
  // 
  // Save Comments
  const comment = new Comment({
    text,
    author,
    // userEmail: req.decodedUser.email,
    // userName: req.decodedUser.firstName,
  });
  await comment.save();
  res.send(comment);
};
exports.deleteComments = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
 
};

exports.getAllComments = async (req, res) => {
  const allComments = await Comment.find();
  res.status(200).json({ allComments });
  //res.send("yusuf");
};
