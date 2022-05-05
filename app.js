const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
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

app.use("/static", express.static("public"));
app.use(express.json());

app.get("/", async (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/index.html"));
});

app.post("/todos", async (req, res) => {
  const todo = new Todo({ content: req.body.content });
  try {
    await todo.save();
  } catch (err) {
    console.log(err);
  } finally {
    res.redirect("/");
  }
});

app.get("/todos", (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) return res.send(500, err);
    return res.json(todos);
  });
});

app.put("/todos/:id", (req, res) => {
  console.log("body", req.body);
  console.log(req.params.id);
  Todo.findByIdAndUpdate(
    req.params.id,
    { content: req.body.content },
    { returnDocument: "after" }
  )
    .then((todo) => {
      console.log(todo);
      res.json(todo);
    })
    .catch((err) => {
      console.log(err);
      res.send(500, err);
    });
});
// app.post("/", async (req, res) => {
//   const todo = new Todo({ content: req.body.content });
//   try {
//     await todo.save();
//   } catch (err) {
//     console.log(err);
//   } finally {
//     res.redirect("/");
//   }
// });

// app.post("/:id/update", async (req, res) => {
//   try {
//     await Todo.findByIdAndUpdate(req.params.id, { content: req.body.content });
//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//     res.send(500, err);
//   }
// });

// app.post("/:id/delete", async (req, res) => {
//   try {
//     await Todo.findByIdAndDelete(req.params.id);
//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//     res.send(500, err);
//   }
// });
