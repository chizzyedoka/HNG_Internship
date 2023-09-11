const Joi = require("joi");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  track: {},
});

const Student = mongoose.model("Student", studentSchema);

module.exports.Student = Student;
