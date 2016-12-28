var Zmath = require('./z_math.model');

//liste des cycles
exports.index = function(req, res) {
  Zmath.findAll().then(function (zmaths) {
    return res.json(zmaths);


  });
};

exports.show = function(req, res) {
  Zmath.findById(req.params.id).then(function (zmaths) {
    return res.json(zmaths);


  });
};