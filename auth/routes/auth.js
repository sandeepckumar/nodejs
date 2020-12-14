const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth.controller");
const { body, validationResult } = require("express-validator");

router.post("/register", register);

module.exports = router;
