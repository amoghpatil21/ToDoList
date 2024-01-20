var express = require("express");
var usersRouter = require("./api/user/user.route");
var app = express();
require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Data base connection Established");
  })
  .catch((error) => {
    console.log(error);
    console.log("Error in connecting Mongodb");
  });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.json());
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
