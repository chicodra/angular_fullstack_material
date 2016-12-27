var Niveau = require('./pl_niveau.model');

//liste des niveaux
exports.index = function(req, res) {
  Niveau.findAll().then(function (cycles) {
    return res.json(cycles);


  });
};

//get niveau by id
exports.show = function(req, res) {
  Niveau.findById(req.params.id).then(function (cycles) {
    return res.json(cycles);


  });
};


exports.getNiveauByCycle = function(req, res) {
  Niveau.findAll({where : {id_cycle : req.params.id}}).then(function (cycles) {
    return res.json(cycles);


  });
};

