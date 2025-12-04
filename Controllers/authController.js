const userModel = require("../models/userModel");

exports.registerUser = async (req, res) => {
  try {
    let userName = req.body.userName;
    let password = req.body.password;
    let email = req.body.email;

    if (userName && password && email) {
      let existingUser = await userModel.findOne({ email: email });

      if (existingUser) {
        res
          .status(409)
          .json({ message: "User with this mailId is already registerd" });
      } else {
        let newUser = new userModel({ userName, email, password });
        await newUser.save();
        res.status(201).json({ message: "Successfully Registered", newUser });
      }
    } else {
      res.status(400).json({ message: "Please fill the fields" });
    }
  } catch (error) {
    res.status(500).json({ message: "soomething went wrong" });
    console.log(error)
  }
};
