'use strict'

const { Router } = require('express')

const home = require('../controllers/home')

const router = Router()

router.get('/', home.index)

module.exports = router
