'use strict'

const passport = require('passport')
const Strategy = require('passport-local')
const { compare } =  require('bcrypt-nodejs')
const User = require('./models/user')



passport.serializeUser((user, cb) => cb(null, user.id))
passport.deserializeUser((_id, cb) => User.findOne({_id}, cb))


passport.use(new Strategy({
	usernameField: 'email',
	passwordField: 'password'
},
	(email, password, cb) => {
  User.findOne({ email })
    .then(user => {
      if (user) {
        return new Promise((resolve, reject) => {
          compare(password, user.password, (err, matches) => {
            if (err) {
              reject(err)
            } else {
              resolve(matches && user)
            }
          })
        })
      } else {
        cb(null, null, { msg: 'Email does not exist in our system' })
      }
    })
    .then((user) => {
      cb(null, user, {msg: user ? 'Successfully logged in' : 'Password does not match'})
    })
    .catch(cb)
}))
