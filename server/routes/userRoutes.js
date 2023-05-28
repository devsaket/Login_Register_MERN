const express = require('express')

const {homeRoute, addUserRoute} = require('../services/userservice')
const router = express.Router()

const controller = require('../controller/usercontroller')


router.get('/', homeRoute)

router.post('/addCustomer', addUserRoute)

// API Paths
router.post('/api/users', controller.create)
router.get('/api/users', controller.find)


module.exports = router