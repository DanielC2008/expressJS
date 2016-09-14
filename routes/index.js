'use strict'

const { Router } = require('express')
const router = Router()
const Contact = require('../models/contact')
const Order = require('../models/order')

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

router.get('/order', (req, res) =>
	res.render('order', {page: 'Order'})
)

router.post('/order', (req, res) => {
	Order
	.create(req.body)
	.then(() => res.redirect('/'))
	.catch(err)
})

module.exports = router
