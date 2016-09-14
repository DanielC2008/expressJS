'use strict';
// mongoose allows you to use the data base all over the place with out passing the db obj around
const mongoose = require('mongoose');
const MONGODB_URL = 'mongodb://localhost:27017/pizzadeath';
/////////////////////////////////////////
// Tell mongoose to use regular promise
mongoose.Promise = Promise
/////////////////////////////////////////
//Export the connection to mongodb
module.exports.connect = () => mongoose.connect(MONGODB_URL)
/////////////////////////////////////////
