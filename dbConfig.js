//import

const mongoose = require('mongoose')

//connect

mongoose.connect(process.env.connectionString).then((res) => {
    console.log("Connected To mongoDb")
}).catch((err) => {
    console.log("Connection Error",err)
})

