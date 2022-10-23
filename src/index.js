const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");

const routes = require("./routes");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes());

nunjucks.configure(path.join(__dirname, "views"), {
  autoescape: true,
  express: app,
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () =>
  console.log(`Ice Cream Maker is listening on port ${PORT}`)
);
