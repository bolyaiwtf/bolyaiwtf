const db = require('../lib/db');

const MessageSchema = require('./schemas/Message');

const Message = db.model('message', MessageSchema);

module.exports = {
  Message
};
