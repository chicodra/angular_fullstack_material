var Utilisateur = require('./utilisateur.model');

//liste des cycles
exports.index = function(req, res) {
  Utilisateur.findAll().then(function (utilisateurs) {
    return res.json(utilisateurs);


  });
};

exports.show = function(req, res) {
  Utilisateur.findById(req.params.id).then(function (utilisateurs) {
    return res.json(utilisateurs);


  });
};

exports.getUserByProfil = function(req, res) {
  Utilisateur.findAll({where : {id_profil : req.params.id}}).then(function (utilisateurs) {
    return res.json(utilisateurs);


  });
};