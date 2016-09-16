'use strict';
// mongoose allows you to use the data base all over the place with out passing the db obj around
const mongoose = require('mongoose');
//connect to mongo locally
// const MONGODB_URL = 'mongodb://localhost:27017/pizzadeath';
//push to robmon locally
// const MONGODB_URL = 'mongodb://PizzaDeath:killedbypizza@ds021166.mlab.com:21166/pizzadeath'
//this is set on heroku under setting/Config Vars

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/pizzadeath'
/////////////////////////////////////////
// Tell mongoose to use regular promise
mongoose.Promise = Promise
/////////////////////////////////////////
//Export the connection to mongodb
module.exports.connect = () => mongoose.connect(MONGODB_URL)
/////////////////////////////////////////
module.exports.disconnect = () => mongoose.disconnect()
