const mongoose = require('mongoose');
const config = require('../config');

const CONNECTION_STRING = config.mongo.connectionString;

const db = new mongoose.Mongoose();

db.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = db.connection;
connection.on('error', console.error.bind(console, 'Mongoose connection error:'));

module.exports = db;
