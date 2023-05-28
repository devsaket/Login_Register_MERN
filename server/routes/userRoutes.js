const express = require('express')

const {homeRoute, addUserRoute} = require('../services/userservice')
const router = express.Router()

const controller = require('../controller/usercontroller')


router.get('/', homeRoute)

// router.post('/addUser', addUserRoute)

// API Paths
router.post('/api/usersignup', controller.create)
router.post('/api/userlogin', controller.findOne)


module.exports = router