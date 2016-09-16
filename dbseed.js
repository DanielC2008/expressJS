'use strict'

const { connect, disconnect } = require('./database')

const Sizes = require('./models/size')
const Toppings = require('./models/toppings')

connect()
	.then(() => Sizes.remove({}))
	.then(() => Toppings.remove({}))
	.then( () =>
		Sizes.insertMany([
			{name:'Small', inches: 8},
			{name: 'Medium', inches: 12},
			{name: 'Large', inches: 14},
			{name: 'Murica', inches: 25}
		])
	)
	.then( () =>
		Toppings.insertMany([
			{name: 'Pepperoni'},
			{name: 'Sausage'},
			{name: 'Knives'}
		])
	)
	.catch(console.error)
	.then(disconnect)
