var Serie = require('./pl_series.model');

//liste des cycles
exports.index = function(req, res) {
  Serie.findAll().then(function (series) {
    return res.json(series);


  });
};

exports.show = function(req, res) {
  Serie.findById(req.params.id).then(function (series) {
    return res.json(series);


  });
};