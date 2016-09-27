'use strict'

const User = require('../models/user')

module.exports.new = ('/register', (req, res) =>
  res.render('register')
)

module.exports.create = ('/register', ({ body: { email, password, confirmation } }, res, err) => {
  if (password === confirmation) {
    User.findOneByEmail(email)
      .then(user => {
        if (user) {
          res.render('register', { msg: 'Email is already registered' })
        }
        return User.create({ email, password })
      })
      .then(() => res.redirect('/login'))
      .catch(err)
  } else {
    res.render('register', { msg: 'Password & password confirmation do not match' })
  }
})
