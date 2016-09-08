"use strict";

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const {cyan, red} = require('chalk')

const routes = require('./routes/')

app.set('PORT', process.env.PORT || 3000)

app.set('view engine', 'pug');

if (process.env.NODE_ENV !== 'production') {
  app.locals.pretty = true;
}

//Middlewares
app.use((req, res, next) => {
	console.log(`[${new Date().toString()}] "${cyan(req.method)} ${cyan(req.url)}" "${req.headers['user-agent']}"`)
	next()
})
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.locals.company = 'Pizza Death!'

// routes
app.use(routes)

app.use((req, res) => {
// 404 catch and pass to error handler
	// const err = Error('Not Found')
	// err.status = 404
	// next(err)
	res.render('404.pug')
})

// Error handling middleware
app.use((err, req, res, next) => {
	res.sendStatus(500)
	console.error(
		`[${new Date().toString()}] "${red(req.method)} ${red(req.url)}" "Error (${res.statusCode}): "${res.statusMessage}"`
	)
	console.error(err.stack)
})

app.listen(app.get('PORT'), () => {
  console.log(`Hey, I'm listening on port ${app.get('PORT')}`);
})
