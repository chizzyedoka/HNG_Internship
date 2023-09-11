const students = require("./routes/students");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 1000;

mongoose
  .connect("mongodb://0.0.0.0:27017/hngInternship", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

//middleware
app.use(express.json());
app.use("/api/students", students);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to HomePage");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
