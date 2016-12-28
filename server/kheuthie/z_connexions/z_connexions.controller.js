var Zconnex = require('./z_connexions.model');

//liste des cycles
exports.index = function(req, res) {
  Zconnex.findAll().then(function (zconnexs) {
    return res.json(zconnexs);


  });
};

exports.show = function(req, res) {
  Zconnex.findById(req.params.id).then(function (zconnexs) {
    return res.json(zconnexs);


  });
};