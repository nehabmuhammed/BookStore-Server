const jwt = require('jsonwebtoken')

const jwtMiddleware = async(req,res,next) =>{

    // token is passed from se 
    let token = req.headers.authorization.split(' ')[1]

    try{
        if(token){
    let decodedDats = jwt.verify(token,process.env.jwtSecretKey)
    if(decodedDats){
        req.user = decodedDats.email
        next()
    }else{
        res.status(401).json({message:"Invalid Token"})
    }
        }else{
            res.status(401).json({message:"Token is Required,Please Login"})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({message:"Spmething went wrog while validating the oken"})
    }

}

module.exports = jwtMiddleware