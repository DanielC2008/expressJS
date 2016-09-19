'use strict'

const { Router } = require('express')
const router = Router()
const Contact = require('../models/contact')
const User = require('../models/user')
const Order = require('../models/order')
const Size = require('../models/size')
const Toppings = require('../models/toppings')

router.get('/', (req, res) =>
  res.render('index')
)

router.get('/about', (req, res) =>
  res.render('about', { page: 'About' })
)

router.get('/contact', (req, res) =>
  res.render('contact', { page: 'Contact' })
)


router.post('/contact', (req, res, err) => {
	// mongoose way
 Contact
 	.create(req.body)
  // mongo way
  // db().collection('contact')
  //   .insertOne(req.body)
  .then(() => res.redirect('/'))
  .catch(err)
})

router.get('/order', (req, res, err) =>
	Promise
		.all([
		Size.find().sort({inches: 1}),
		Toppings.find().sort({name:1})
	])
	.then(([sizes, toppings]) =>
		res.render('order', {page: 'Order', sizes, toppings})
	)
	.catch(err)
)

router.post('/order', (req, res, err) => {
	Order
	.create(req.body)
	.then(() => res.redirect('/'))
	.catch(err)
})


router.get('/login', (req, res, err) => {
	res.render('login')
})

router.post('/login', (req, res, err) => {
	User.find({email: req.body.email})
	.then((currUser) => {
		if(currUser[0].password === req.body.password) {
		res.redirect('/')
	} else {
		res.render('login', { error: 'Email & password combination does not match'})
	}
	})
})

router.get('/register', (req, res, err) => {
	res.render('register')
})

router.post('/register', (req, res, err) => {
	if(req.body.password === req.body.confirmation) {
		User
		.create(req.body)
		.then(() => res.redirect('/'))
		.catch(err)
	} else {
		res.render('register', { error: 'Password confirmation failed'})
	}

})

module.exports = router
