const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { ppid } = require("process");

app.set("view engine", ejs);

app.use("/public", express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded());
app.use(express.json)();

app.listen(port, () => {
  console.log(`Sever started on port ${port}`);
});
