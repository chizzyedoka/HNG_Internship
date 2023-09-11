const Joi = require("joi");
const mongoose = require("mongoose");

const studentTrack = {
  frontend: "frontend",
  backend: "backend",
  mobile: "mobile",
  design: "design",
};

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
  track: {
    type: String,
    required: true,
    enum: ["frontend", "backend", "mobile", "design"],
  },
});

// validate the student from the client side
function validateStudent(student) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    track: Joi.string()
      .valid(
        studentTrack.frontend,
        studentTrack.backend,
        studentTrack.mobile,
        studentTrack.design
      )
      .required(),
  });
  return schema.validate(student);
}

const Student = mongoose.model("Student", studentSchema);

module.exports.Student = Student;
module.exports.validateStudent = validateStudent;
