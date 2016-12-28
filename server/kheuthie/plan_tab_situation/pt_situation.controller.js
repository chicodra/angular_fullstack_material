var Situation = require('./pt_situation.model');

//liste des niveaux
exports.index = function(req, res) {
  Situation.findAll().then(function (situations) {
    return res.json(situations);


  });
};


exports.show = function(req, res) {
  Situation.findById(req.params.id).then(function (situations) {
    return res.json(situations);


  });
};

exports.getSitByNiv = function(req, res) {
  Situation.findAll({where : {id_niv : req.params.id}}).then(function (situations) {
    return res.json(situations);


  });
};
