const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const commentsController = require("../controller/commentsController");

// base url: /api/comments

/**
 * @route   GET /api/comments/postcomment
 * @desc    All comments endpoint
 * @access  Public
 */
router.post("/postcomment",auth,  commentsController.postComment);
// auth eklenecek unutma
/**
 * @route   GET /api/comments
 * @desc    All comments endpoint
 * @access  Public
 */
router.get("/",auth, commentsController.getAllComments);

/**
 * @route   GET /api/comments/:id
 * @desc    individual comments endpoint
 * @access  Private
 */
router.delete("/",auth, commentsController.deleteComments);
//router.get("/:id", commentsController.getPersonalComment);

module.exports = router;
