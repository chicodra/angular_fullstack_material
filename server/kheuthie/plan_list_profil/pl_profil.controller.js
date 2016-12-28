var Profil = require('./pl_profil.model');

//liste des cycles
exports.index = function(req, res) {
  Profil.findAll().then(function (profils) {
    return res.json(profils);


  });
};

exports.show = function(req, res) {
  Profil.findById(req.params.id).then(function (profils) {
    return res.json(profils);


  });
};