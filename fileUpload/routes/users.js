var express = require("express");
const { memoryStorage } = require("multer");
var router = express.Router();
const multer = require("multer");
const wrtfl = require("../config/wrtFile");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     const fileextn = file.originalname.split(".").splice(-1);
//     cb(null, file.fieldname + "_ " + Date.now() + "." + fileextn);
//   },
// });

const fs = require("fs");
const storage = memoryStorage();
const upload = multer({ storage: storage });

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

router.post("/register", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const fileextn = req.file.originalname.split(".").splice(-1);
  const fileName = req.file.fieldname + "_" + Date.now() + "." + fileextn;
  await wrtfl(`uploads/${fileName}`, req.file.buffer);
  res.send("<h1> Account Created Successfully </h1>");
});
