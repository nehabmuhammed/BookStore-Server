const express = require('express')
const authController = require('./Controllers/authController')


const router = new express.Router()

router.post('/registerUser',authController.registerUser)


module.exports = router
