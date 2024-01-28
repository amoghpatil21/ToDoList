const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  mobileno: String,
  email: String,
  gender:String,
  
});
const model = mongoose.model("Employee", EmployeeSchema);
module.exports = model;
