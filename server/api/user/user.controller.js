const UserModel = require("./user.model");

exports.register = async (req, res, next) => {
  try {
    const existingsUser = await UserModel.findOne({ email: req.body.email });
    if (existingsUser) {
      return res.status(400).json({
        message: "User already registered",
      });
    } else {
      const newUser = new UserModel({
        email: req.body.email,
        password: req.body.password,
      });
      const result = await newUser.save();
      res.status(201).json({ message: "User successfully registered" });
    }
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const authorizeUser = await UserModel.findOne({
      $and: [{ email: req.body.email }, { password: req.body.password }],

    });
    const validateUser = await UserModel.findOne({email:req.body.email});
    if (validateUser) {
    //    res.status(200).json({
    //     message: "Valid User",

    //   })
    await console.log("Valid User")
      if(authorizeUser){
        return res.status(200).json({
            message: "Authorized User",

          });
      }
      else{
        res.status(401).json({message:"Unauthorized User"})
      }
    } else {
      res.status(404).json({ message: " User Not Found" });
    }

  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
