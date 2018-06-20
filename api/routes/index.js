const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
// const auth = jwt({
//   secret: process.env.JWT_SECRET,
//   userProperty: 'payload'
// });

// const ctrlProfile = require('../controllers/profile');
// const ctrlAuth = require('../controllers/authentication');

// profile
// router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
// router.post('/register', ctrlAuth.register);
// router.post('/login', ctrlAuth.login);

// Routes
router.get('/', (req, res) => {
  res.send({
    success: true,
    message: 'Successfully reached home page',
  });
});

module.exports = router;
