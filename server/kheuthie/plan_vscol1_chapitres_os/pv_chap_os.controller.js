var Chapitre_os = require('./pv_chap_os.model');

//liste des cycles
exports.index = function(req, res) {
  Chapitre_os.findAll().then(function (chapitres) {
    return res.json(chapitres);


  });
};

exports.show = function(req, res) {
  Chapitre_os.findById(req.params.id).then(function (chapitres) {
    return res.json(chapitres);


  });
};