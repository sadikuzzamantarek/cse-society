const { Schema, model } = require("mongoose");
const noticeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  notice: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});
module.exports = model("notices", noticeSchema);
