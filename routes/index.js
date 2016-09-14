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


router.post('/contact', (req, res) => {
	// mongoose way
  const msg = new Contact(req.body)
  msg.save()
  // mongo way
  // db().collection('contact')
  //   .insertOne(req.body)
    .then(() => res.redirect('/'))
    .catch(() => res.send('BAD'))
})

router.get('/order', (req, res) =>
	res.render('order', {page: 'Order'})
)

router.post('/order', (req, res) => {
	const order = new Order(req.body)
	order.save()
	.then(() => res.redirect('/'))
	.catch(() => res.send('Order not Processed. Try again'))
})

module.exports = router
