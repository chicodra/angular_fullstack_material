var Cycle = require('./plan_list_cycle.model');

//liste des cycles
exports.index = function(req, res) {
  Cycle.findAll().then(function (cycles) {
    return res.json(cycles);


  });
};