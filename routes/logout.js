'use strict'

const { Router } = require('express')

const logout = require('../controllers/session')

const router = Router()

router.get('/logout', logout.edit)
router.post('/logout', logout.destroy)

module.exports = router
