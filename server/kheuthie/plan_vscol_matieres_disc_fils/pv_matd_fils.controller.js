var Fils = require('./pv_matd_fils.model');

//liste des cycles
exports.index = function(req, res) {
  Fils.findAll().then(function (fils) {
    return res.json(fils);


  });
};

exports.show = function(req, res) {
  Fils.findById(req.params.id).then(function (fils) {
    return res.json(fils);


  });
};

exports.getFilsByPar = function(req, res) {
  Fils.findAll({where : {id_parent : req.params.id}}).then(function (fils) {
    return res.json(fils);


  });
};