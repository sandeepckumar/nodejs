const express = require("express");
const router = express.Router();

//@route   GET "/"
//@desc    Render the Index page
//@access  Public

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
