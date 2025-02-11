const { Schema, model } = require("mongoose");
// ("Access-Control-Allow-Methods");
const committeeSchema = new Schema({
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
  skills: {
    type: [],
    required: false,
    default: undefined,
  },
  department: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },

  teamInformation: {
    teamName: {
      type: String,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
  },
  designition: {
    type: String,
    required: true,
    default: "Member",
  },
  level: {
    type: String,
    required: true,
  },
  term: {
    type: String,
    required: true,
  },
  fieldOfInterest: {
    type: String,
    required: false,
  },
});
module.exports = model("committee", committeeSchema);
