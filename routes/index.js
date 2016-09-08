"use strict"

const {Router} = require('express')
const router = Router()

	router.get('/', (req, res) => {
	  res.render('index.pug')
	})

	router.get('/about', (req, res) => {
	  res.render('about.pug', { page: 'About'})
	})

	router.get('/contact', (req, res) => {
	  res.render('contact.pug', { page: 'Contact'})
	})


	router.post('/contact', (req, res) => {
	  console.log(req.body)
	  res.redirect('/')
	})


module.exports = router
