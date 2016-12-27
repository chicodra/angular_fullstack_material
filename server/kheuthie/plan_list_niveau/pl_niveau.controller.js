var Niveau = require('./pl_niveau.model');

//liste des niveaux
exports.index = function(req, res) {
  Niveau.findAll().then(function (niveaux) {
    return res.json(niveaux);


  });
};

//get niveau by id
exports.show = function(req, res) {
  Niveau.findById(req.params.id).then(function (niveaux) {
    return res.json(niveaux);


  });
};


exports.getNiveauByCycle = function(req, res) {
  Niveau.findAll({where : {id_cycle : req.params.id}}).then(function (niveaux) {
    return res.json(niveaux);


  });
};

exports.getNiveauByLib = function(req, res) {
  Niveau.findAll({where : {libelle : req.params.lib}}).then(function (niveaux) {
    return res.json(niveaux);


  });
};

