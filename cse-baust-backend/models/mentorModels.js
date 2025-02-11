const { Schema, model } = require("mongoose");
const mentorSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  skills: {
    type: [],
    required: false,
    default: undefined,
  },
  phone: {
    type: String,
    required: true,
  },
  presentPosition: {
    type: String,
    required: false,
  },
  formerPosition: {
    type: String,
    require: false,
  },
  batch: {
    type: String,
    required: true,
  },
});
module.exports = model("mentors", mentorSchema);
