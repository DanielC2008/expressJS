'use strict'

const { hash, genSaltSync } = require('bcrypt-nodejs')
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
        } else {
          return new Promise((resolve, reject) => {
            hash(password, genSaltSync(13), null, function(err, hash) {
              if (err) {
                reject(err)
              } else {
                resolve(hash)
              }
            })
          })
        }
      })
      .then(hash => User.create({ email, password: hash }))
      .then(() => res.redirect('/login'))
      .catch(err)
  } else {
    res.render('register', { msg: 'Password & password confirmation do not match' })
  }
})
