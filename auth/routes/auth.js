const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth.controller");
const { body, validationResult } = require("express-validator");

router.post(
  "/register",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  register
);

module.exports = router;

// validate
// create a func that takes email & msg
