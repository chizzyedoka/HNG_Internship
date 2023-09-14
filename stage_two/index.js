const students = require("./routes/students");
const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const uri = process.env.MONGODB_URI;
const app = express();
const port = 1000;

// Access and log the MONGO_URI

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

//middleware
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

app.use("/api", students);

app.get("*", (req, res) =>
  res.status(404).send({
    error: {
      code: 404,
      message: "Invalid API route",
    },
  })
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
