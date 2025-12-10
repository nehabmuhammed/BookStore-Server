const express = require('express')
const authController = require('./Controllers/authController')
const jwtMiddleware = require('./middlewares/jwtMiddleWares')
const bookController = require('./Controllers/bookContrller')
const multerConfig = require('./Controllers/multeMiddleware')


const router = new express.Router()

router.post('/registerUser',authController.registerUser)
router.post('/loginUser',authController.loginUser)
router.post('/googleLogin',authController.loginGoogleApi)
router.post('/addBook',jwtMiddleware,multerConfig.array('uploadedImages'),bookController.addBookController)

module.exports = router
