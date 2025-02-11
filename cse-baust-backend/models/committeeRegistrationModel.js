const { Schema, model } = require("mongoose");
const committeeRegistrationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  universityID: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  fieldOfInterest: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  term: {
    type: String,
    required: true,
  },
  designition: {
    type: String,
    required: true,
    default: "Member",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = model("committeeRegistration", committeeRegistrationSchema);
