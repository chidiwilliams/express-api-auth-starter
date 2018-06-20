const express = require('express');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

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
// Index. Tests for working route.
router.get('/', (req, res) => {
  res.send({
    success: true,
    message: 'Successfully reached home page',
  });
});

// User Profile
router.get('/profile', userController.profile);

// Authentication routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Admin routes
// TODO: Delete this
router.get('/users', userController.users);

module.exports = router;
