const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");
const comments = require("./comments");

// Only /api endpoint

/**
 * @route /api/auth
 * @desc Route for Auth
 */
router.use("/auth", authRouter);

/**
 * @route /api/comments
 * @desc Route for Profile
 */
router.use("/comments", comments);

module.exports = router;
