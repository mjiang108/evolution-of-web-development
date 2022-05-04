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
app.use("/static", express.static("public"));

app.get("/", async (req, res) => {
  let todos;
  try {
    todos = await Todo.find();
  } catch (err) {
    console.log(err);
  }
  res.render("index.ejs", { todos });
});

app.post("/", async (req, res) => {
  const todo = new Todo({ content: req.body.content });
  try {
    await todo.save();
  } catch (err) {
    console.log(err);
  } finally {
    res.redirect("/");
  }
});

app.get("/:id", async (req, res) => {
  let todo;
  try {
    todo = await Todo.findById(req.params.id);
    res.render("todo.ejs", { todo });
  } catch (err) {
    console.log(err);
  }
});

app.post("/:id/update", async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, { content: req.body.content });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.send(500, err);
  }
});

app.post("/:id/delete", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.send(500, err);
  }
});
