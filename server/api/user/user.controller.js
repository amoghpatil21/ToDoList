const userModel = require("./user.model");

exports.getUsers = (req, res, next) => {
  userModel
    .find()
    .then((users) => {
      res.status(200).json({
        users: users,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.createUser = (req, res, next) => {
  const newUser = new userModel({
    fname: req.body.fname,
    lname: req.body.lname,
  });
  newUser
    .save()
    .then((result) => {
      res.status(200).json({
        user: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.getUserById = (req, res, next) => {
  userModel
    .findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json({
        error: err,
      });
    });
};
exports.deleteUserById = (req, res, next) => {
  userModel
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(200).json({ msg: "User not found" });
      }
    })
    .catch((err) => {
      res.status(404).json({
        error: err,
      });
    });
};
exports.updateUser =(req,res,next)=>{
  userModel
  .updateOne(req.params.id)
  .then((users) => {
    res.status(200).json({
      users: users,
    });
  })
  .catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
}
