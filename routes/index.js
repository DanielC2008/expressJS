'use strict'

const { Router } = require('express')

const home = require('./home')
const about = require('./about')
const contact = require('./contact')
const login = require('./login')
const register = require('./register')
const order = require('./order')
const logout = require('./logout')

const router = Router()

router.use(home)
router.use(about)
router.use(contact)
router.use(login)
router.use(register)

/////////////////////login guard middleware
router.use((req, res, next) => {
	if(req.user.email) {
		next()
	} else {
		res.redirect('/login')
	}
})
////////////////////////everything below this is only accessible if you are logged in
router.use(order)
router.use(logout)

module.exports = router
