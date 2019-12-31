const mongoose = require('mongoose');

const userSchemaDef = {
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Integer,
    required: true,
  },
};

const userSchema = new mongoose.Schema(userSchemaDef);

module.exports = mongoose.model('User', userSchema);