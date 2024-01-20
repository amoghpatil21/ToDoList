const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
});
const model = mongoose.model("User", userSchema);
module.exports = model;
