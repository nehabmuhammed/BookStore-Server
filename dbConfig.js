//import

const mongoose = require('mongoose')

//connect

mongoose.connect('mongodb+srv://Nehab:Nehab123@cluster0.9zwznyo.mongodb.net/?appName=Cluster0').then((res) => {
    console.log("Connected To mongoDb")
}).catch((err) => {
    console.log("Connection Error",err)
})

