const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = 3000;
mongoose.connect(process.env.DB_CONNECT, (err) => {
  if (err) return console.log("db connection failed");
  console.log("db connection succeeded");
  return app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.post("/", (req) => {
  console.log(req.body);
});
