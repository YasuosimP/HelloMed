const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Getting all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating a user
router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password, // For demonstration only. Remember to hash passwords in production.
    // Add more fields as necessary
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
