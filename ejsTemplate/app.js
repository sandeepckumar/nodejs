const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const indexRouter = require("./routes/index");
const productRouter = require("./routes/products");
// const ejs = require("ejs");

app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json)();

app.use("/", indexRouter);
app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Sever started on port ${port}`);
});
