const { Schema, model } = require("mongoose");
const exclusiveMemberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  designition: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: false,
    default: "Member",
  },
  rank: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  creation: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = model("exclusiveMembers", exclusiveMemberSchema);
