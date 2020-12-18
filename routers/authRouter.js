const express = require("express");
const authController = require("../controller/authController");
//const { check } = require("express-validator");
const validations = require("../middleware/validationMiddleware");

const router = express.Router();

// routes for /api/auth

/**
 * @route   POST /api/auth/register
 * @desc    Register endpoint
 * @access  Public
 */
router.post(
  "/register",
  validations.emailPasswordValidation,
  authController.authRegister
);

/**
 * @route   POST /api/auth/login
 * @desc    Login endpoint
 * @access  Public
 */
router.post(
  "/login",
  validations.emailPasswordValidation,
  authController.authLogin
);

module.exports = router;
