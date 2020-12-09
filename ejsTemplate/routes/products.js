const express = require("express");
const router = express.Router();
const data = ["iphone", "apple-watch", "macbook-pro", "macbook-air"];

//@route    GET "/products"
//@desc     Get all products
//@access   Public

router.get("/", (req, res) => {
  res.render("products", { data });
});

module.exports = router;
