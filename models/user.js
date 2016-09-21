'use strict'

const mongoose = require('mongoose')

const { hash, genSaltSync } = require('bcrypt-nodejs')

const HTML5_EMAIL_VALIDATION = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		lowercase: true,
		match: [HTML5_EMAIL_VALIDATION, 'Please enther a valid email']
	},
	password: {
		type: String,
		required:true
	}
})

userSchema.pre('save', function(cb) {
	const user = this
	hash(user.password, genSaltSync(13), null, function(err, hash) {
		if (err) {
			return cb(err)
		}
		user.password = hash
		cb()
  })
})

userSchema.statics.findOneByEmail = function (email, cb) {
	const collection = this
	return collection.findOne({ email }, cb)
}

module.exports = mongoose.model('User', userSchema)
