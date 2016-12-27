var Chapitre = require('./pv1_chapitres.model');

//liste des cycles
exports.index = function(req, res) {
  Chapitre.findAll().then(function (chapitres) {
    return res.json(chapitres);


  });
};

exports.show = function(req, res) {
  Chapitre.findById(req.params.id).then(function (chapitres) {
    return res.json(chapitres);


  });
};