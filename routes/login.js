'use strict'

const { Router } = require('express')
const passport = require('passport')
const login = require('../controllers/session')

const router = Router()

router.get('/login', login.new)
router.post('/login', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login'
}))

module.exports = router
