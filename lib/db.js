const mongoose = require('mongoose');

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const db = new mongoose.Mongoose();

db.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = db.connection;
connection.on('error', console.error.bind(console, 'Mongoose connection error:'));

module.exports = db;
