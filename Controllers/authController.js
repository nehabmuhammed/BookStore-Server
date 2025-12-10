const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')

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


exports.loginUser = async(req,res) => {
      try {
          let {email} = req.body
          let {password} = req.body

          let existingUser = await userModel.findOne({email:email})

          if(existingUser){
            if(existingUser.password == password){
          
            //token

            let payload = {
              userName:existingUser.userName,
              email:existingUser.email,
              userType:existingUser.userType
            }

            let token = jwt.sign(payload,process.env.jwtSecretKey)
                res.status(200).json({messae:"Login successfull",token})

            }else{
              res.status(400).json({message:"password Invalid"})
            }
          }else{
            res.status(400).json({message:"user with this email id"})
          }

      } catch (error) {
        console.log(error)
        res.status(500).json({message:"something went wrong"})
      }
}

exports.loginGoogleApi = async(req,res) =>{
  try {
    let{userName,email,proPic} = req.body
    let existingUser = await userModel.findOne({email:email}) 
    if(existingUser){
      // loginLogic
      let payload = {
              userName:existingUser.userName,
              email:existingUser.email,
              proPic:existingUser.proPic
            }
                      let token = jwt.sign(payload,process.env.jwtSecretKey)
                res.status(200).json({messae:"Login successfull",token})

    }else{
      // registerLogic
      let newUser = new userModel({ userName, email, password:"1234",proPic });
        await newUser.save();
        res.status(201).json({ message: "Successfully Registered", newUser });
        let payload = {
          userName:newUser.userName,
          email:newUser.email,
          userType:newUser.userType
        }
          let token = jwt.sign(payload,process.env.jwtSecretKey)
                res.status(200).json({messae:"Login successfull",token})

    }
  } catch (error) {
    res.status(500).json({message:"something went wong"})
  }
}