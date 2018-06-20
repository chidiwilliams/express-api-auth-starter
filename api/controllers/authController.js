var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.register = function(req, res) {
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(400).json({
      message: 'Name, email, and password fields are required.',
    });

    return;
  }

  let user = new User();

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user
    .save()
    .then(result => {
      res
        .status(200)
        .append('X-Authorization', 'Bearer ' + user.generateJWT())
        .json({
          message: 'done',
          user: user,
        });
    })
    .catch(err => {
      if (err.code === 11000) {
        res.status(409).json({
          message: 'User already exists',
        });
      } else {
        res.status(500).json({
          error: err,
        });
      }
    });
};

module.exports.login = function(req, res) {
  res.status(200).json({
    message: 'Logging in...',
  });
};
