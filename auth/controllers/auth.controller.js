const { User } = require("../model");

const login = (res, req) => {};

const register = (res, req) => {
  console.log(req.body);
  res.send(req.body);
};

module.exports = { register };
