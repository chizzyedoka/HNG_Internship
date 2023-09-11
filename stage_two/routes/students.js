const express = require("express");
const router = express.Router();
const { Student, validateStudent } = require("../models/students");

// endpoint to get all students in the Internship
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// endpoint to add a student
router.post("/", async (req, res) => {
  // validate body of request
  const { error } = validateStudent(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // check if student is in database
  let student = await Student.findOne({ email: req.body.email });

  if (student) return res.status(400).send("Student already exists");

  // create a new student
  student = new Student({
    name: req.body.name,
    email: req.body.email,
    track: req.body.track,
  });
  student = await student.save();
  res.send(student);
});
module.exports = router;
