const express = require("express");
const router = express.Router();
const { Student, validateStudent } = require("../models/students");

// endpoint to get all students in the Internship
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// endpoint to get a particular student
router.get("/:name", async (req, res) => {
  const student = await Student.findOne({ name: req.params.name });
  if (student) return res.send(student);
  return res
    .status(404)
    .send(`Student with name ${req.params.name} doesn't exist`);
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

// endpoint to update information about a student
router.put("/:name", async (req, res) => {
  const fullName = req.params.name;
  // validate body of request
  const { error } = validateStudent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if student is in database
  let student = await Student.findOneAndUpdate(
    { name: fullName },
    {
      name: req.body.name,
      email: req.body.email,
      track: req.body.track,
    },
    { new: true }
  );

  if (!student)
    return res.status(400).send(`Student with name ${fullName} doesn't exist`);

  // student = await student.save();
  // student exists in database
  res.send(student);
});

// router to delete
router.delete("/:name", async (req, res) => {
  const fullName = req.params.name;
  const student = await Student.findOneAndDelete({ name: fullName });
  if (!student)
    return res.status(404).send(`Student with name ${fullName} doesn't exist`);
  res.send(student);
});

module.exports = router;
