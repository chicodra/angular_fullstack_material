var Semestre = require('./pl_semestre.model');

//liste des cycles
exports.index = function(req, res) {
  Semestre.findAll().then(function (semestres) {
    return res.json(semestres);


  });
};

exports.show = function(req, res) {
  Semestre.findById(req.params.id).then(function (semestres) {
    return res.json(semestres);


  });
};