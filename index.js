require('./dbConfig')
const express = require('express')
const cors = require('cors')
const router = require('./routes')

const server = new express()

//middelwae to allow cros 
server.use(cors())

//middleweare to pardethe data
server.use(express.json())

//router
server.use(router)


const port = 3000

server.listen(port,() => {
    console.log("Server is listening",port)
})