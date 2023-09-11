const express = require("express");
const app = express();
const port = 1000;

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to HomePage");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
