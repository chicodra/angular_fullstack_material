'use strict';

var _ = require('lodash');
var Cycle = require('./cycle.model');

// Get list of cycles
exports.index = function(req, res) {
  Cycle.find(function (err, cycles) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(cycles);
  });
};

// Get a single cycle
exports.show = function(req, res) {
  Cycle.findById(req.params.id, function (err, cycle) {
    if(err) { return handleError(res, err); }
    if(!cycle) { return res.status(404).send('Not Found'); }
    return res.json(cycle);
  });
};

// Creates a new cycle in the DB.
exports.create = function(req, res) {
  Cycle.create(req.body, function(err, cycle) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(cycle);
  });
};

// Updates an existing cycle in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cycle.findById(req.params.id, function (err, cycle) {
    if (err) { return handleError(res, err); }
    if(!cycle) { return res.status(404).send('Not Found'); }
    var updated = _.merge(cycle, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(cycle);
    });
  });
};

// Deletes a cycle from the DB.
exports.destroy = function(req, res) {
  Cycle.findById(req.params.id, function (err, cycle) {
    if(err) { return handleError(res, err); }
    if(!cycle) { return res.status(404).send('Not Found'); }
    cycle.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}