var express = require("express");
var router = express.Router();

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

// @route   GET /users/register
// @desc    Render the register form
// @access  public

router.get("/register", (req, res) => {
  res.render("register");
});
module.exports = router;
