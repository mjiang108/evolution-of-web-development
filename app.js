const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Todo = require("./models/Todo");

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

app.post("/", async (req, res) => {
  console.log(req.body);
  const todo = new Todo({ content: req.body.content });
  try {
    await todo.save();
  } catch (err) {
    console.log(err);
  } finally {
    res.redirect("/");
  }
});
