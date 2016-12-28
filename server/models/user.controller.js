var User = require('./user.model');

// Get list of chapitres
exports.index = function(req, res) {
  User.findAll().then(function (users) {
    //console.log('users',res.json(users));
    return res.json(users);


  });
};
