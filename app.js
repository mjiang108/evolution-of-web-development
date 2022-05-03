const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.post("/", (req) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
