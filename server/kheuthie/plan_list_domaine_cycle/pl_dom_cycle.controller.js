var Dom_Mat = require('./pl_dom_cycle.model');

//liste des niveaux
exports.index = function(req, res) {
  Dom_Mat.findAll().then(function (domaines) {
    return res.json(domaines);


  });
};