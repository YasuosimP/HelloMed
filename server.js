const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Profile Update Route
app.put('/api/users/profile', (req, res) => {
  // Perform the logic to update the user's profile
  // Retrieve the data from req.body
  // Update the user record in the database

  // Return the updated user object or success message
  res.json({ message: 'Profile updated successfully' });
});

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

app.listen(5000, () => {
  console.log("Server is running on Port: 5000");
});
