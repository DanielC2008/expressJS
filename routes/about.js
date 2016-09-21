'use strict'

const { Router } = require('express')

const about = require('../controllers/about')

const router = Router()

router.get('/about', about.index)

module.exports = router
