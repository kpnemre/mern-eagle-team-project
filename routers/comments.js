const express = require("express");
const router = express.Router();
const commentsController = require("../controller/commentsController");

// base url: /api/comments

/**
 * @route   GET /api/comments
 * @desc    All comments endpoint
 * @access  Public
 */
router.get("/", commentsController.getAllComments);

/**
 * @route   GET /api/comments/:id
 * @desc    individual comments endpoint
 * @access  Private
 */
router.get("/:id", commentsController.getPersonalComment);

module.exports = router;
