var express = require("express");

var TodoRouter =require("./api/todo/todo.route")
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

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
}
  next();
});

app.use("/todo",TodoRouter);

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
