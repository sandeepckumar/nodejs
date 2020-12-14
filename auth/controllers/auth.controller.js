const { validationResult } = require("express-validator");
const { User } = require("../model");

const login = (res, req) => {};

const register = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log(req.body);
  res.send(req.body);
};

module.exports = { register };
