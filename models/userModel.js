const mongoose = require('mongoose')

const userScema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    proPic:{
        type:String,
        default:''
    },
    userType:{
        type:String,
        default:'user'
    },
    bio:{
        type:String,
        default:""
    }
})

const userModel = mongoose.model('users',userScema)

module.exports = userModel