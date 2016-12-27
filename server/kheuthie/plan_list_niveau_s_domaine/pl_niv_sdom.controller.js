var Niv_Sdom = require('./pl_niv_sdom.model');

//liste des cycles
exports.index = function(req, res) {
  Niv_Sdom.findAll().then(function (niv_sdoms) {
    return res.json(niv_sdoms);


  });
};

exports.show = function(req, res) {
  Niv_Sdom.findById(req.params.id).then(function (niv_sdoms) {
    return res.json(niv_sdoms);


  });
};