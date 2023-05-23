const express = require('express')

const {homeRoute} = require('../services/userservice')
const router = express.Router()


router.get('/', homeRoute)


module.exports = router