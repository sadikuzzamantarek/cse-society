const mongoose = require("mongoose");
module.exports.dbConnect = async () => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("MongooseDB Connects");
  } catch (error) {
    console.log(error);
  }
};
