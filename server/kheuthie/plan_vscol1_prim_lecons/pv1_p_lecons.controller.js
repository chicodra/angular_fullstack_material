var lecon = require('./pv1_p_lecons.model');

//liste des cycles
exports.index = function(req, res) {
  lecon.findAll().then(function (lecons) {
    return res.json(lecons);


  });
};

exports.show = function(req, res) {
  lecon.findById(req.params.id).then(function (lecons) {
    return res.json(lecons);


  });
};