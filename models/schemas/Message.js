const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  header: {
    type: String,
    required: true
  },
  comment: {
    type: String
  }
});

MessageSchema.statics.random = async function () {
  const count = await this.countDocuments();
  const target = Math.floor(Math.random() * count);
  const message = await this.findOne().skip(target);
  return message;
};

MessageSchema.methods.toJSON = function () {
  const json = {
    header: this.header
  };

  if (this.comment) {
    json.comment = this.comment;
  }

  return json;
};

module.exports = MessageSchema;
