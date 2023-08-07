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

// For profile route
app.get('/api/profile', async (req, res) => {
  try {
    // Get the user ID from the request headers or session
    const userId = req.user.id; // Replace with how you store the user ID

    // Fetch the user from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user's information
    res.json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

app.listen(5000, () => {
  console.log("Server is running on Port: 5000");
});
