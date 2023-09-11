const express = require("express");
const router = express.Router();
const { Student } = require("../models/students");

// endpoint to get all students in the Internship
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// endpoint to add a student
router.post("/", async (req, res) => {
  // create a new student
  let student = new Student({
    name: req.body.name,
    email: req.body.email,
    track: req.body.track,
  });
  student = await student.save();
  res.send(student);
});
module.exports = router;
