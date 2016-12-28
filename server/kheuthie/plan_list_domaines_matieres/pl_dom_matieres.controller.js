var Domaine = require('./pl_dom_matieres.model');

//liste des niveaux
exports.index = function(req, res) {
  Domaine.findAll().then(function (domaines) {
    return res.json(domaines);


  });
};

//get niveau by id
exports.show = function(req, res) {
  Domaine.findById(req.params.id).then(function (domaines) {
    return res.json(domaines);


  });
};