'use strict'

const { Router } = require('express')

const register = require('../controllers/register')

const router = Router()


router.get('/register', register.new)
router.post('/register', register.create)

module.exports = router
