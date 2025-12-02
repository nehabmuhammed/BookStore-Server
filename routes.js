const express = require('express')
const dummyController = require('./Controllers/dummyController')

const router = new express.Router()

router.get('/getInfo',dummyController.getDetails)

module.exports = router
