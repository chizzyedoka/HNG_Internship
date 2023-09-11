const express = require("express");
const router = express.Router();
const { Student } = require("../models/students");

// endpoint to get all students in the Internship
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

module.exports = router;
