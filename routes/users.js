const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role || 'Patient';  // default to 'Patient' if role isn't provided

    const newUser = new User({name, email, password, role});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/profile').put((req, res) => {
    const { name, email, password, age, sex, sickness } = req.body;

    User.findById(req.user.id)
        .then(user => {
            user.name = name;
            user.email = email;
            user.password = password;
            user.age = age;
            user.sex = sex;
            user.sickness = sickness;

            user.save()
                .then(() => res.json('Profile updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});
// GET /api/profile
router.get('/api/profile', async (req, res) => {
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
  

module.exports = router;
