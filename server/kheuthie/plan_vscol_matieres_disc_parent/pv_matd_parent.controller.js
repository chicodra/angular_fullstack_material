var Parent = require('./pv_matd_parent.model');

//liste des cycles
exports.index = function(req, res) {
  Parent.findAll().then(function (parents) {
    return res.json(parents);


  });
};

exports.show = function(req, res) {
  Parent.findById(req.params.id).then(function (parents) {
    return res.json(parents);


  });
};

exports.getParByDom = function(req, res) {
  Parent.findAll({where : {id_domaine : req.params.id}}).then(function (parents) {
    return res.json(parents);


  });
};