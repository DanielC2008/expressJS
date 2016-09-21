'use strict'

const { Router } = require('express')
const login = require('../controllers/session')

const router = Router()

router.get('/login', login.new)
router.post('/login', login.create)

module.exports = router
