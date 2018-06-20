const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.profile = function(req, res) {};

module.exports.users = function(req, res) {
  const users = User.find()
    .then((docs) => {
      res.status(200).json({
        users: docs,
      });
    })
    .catch();
};
