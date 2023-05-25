const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['User', 'Doctor', 'Admin'],
    default: 'User',
  },
  // Add more fields as necessary
});

module.exports = mongoose.model('User', userSchema);
