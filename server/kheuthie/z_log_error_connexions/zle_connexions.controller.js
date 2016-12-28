var Errcon = require('./zle_connexions.model');

//liste des cycles
exports.index = function(req, res) {
  Errcon.findAll().then(function (errcons) {
    return res.json(errcons);


  });
};

exports.show = function(req, res) {
  Errcon.findById(req.params.id).then(function (errcons) {
    return res.json(errcons);


  });
};