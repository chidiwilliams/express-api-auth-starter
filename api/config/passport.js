const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

// TODO: In config, add username_field type: Email/Username
passport.use(new LocalStrategy({
  usernameField: 'email',
}, function (username, password, done) {
  User.findOne({
    email: username
  }, function (err, user) {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, {
        message: 'User not found',
      });
    }

    if (!user.validPassword(password)) {
      return done(null, false, {
        message: 'Invalid password',
      });
    }

    return done(null, user);
  });
}));
