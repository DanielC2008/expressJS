'use strict'

const mongoose = require('mongoose')

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

userSchema.statics.findOneByEmail = function (email, cb) {
	return this.findOne({ email }, cb)
}

module.exports = mongoose.model('User', userSchema)
