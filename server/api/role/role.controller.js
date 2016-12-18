'use strict';

var _ = require('lodash');
var Role = require('./role.model');

// Get list of roles
exports.index = function(req, res) {
  Role.find(function (err, roles) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(roles);
  });
};

// Get a single role
exports.show = function(req, res) {
  Role.findById(req.params.id, function (err, role) {
    if(err) { return handleError(res, err); }
    if(!role) { return res.status(404).send('Not Found'); }
    return res.json(role);
  });
};

// Creates a new role in the DB.
exports.create = function(req, res) {
  Role.create(req.body, function(err, role) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(role);
  });
};

// Updates an existing role in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Role.findById(req.params.id, function (err, role) {
    if (err) { return handleError(res, err); }
    if(!role) { return res.status(404).send('Not Found'); }
    var updated = _.merge(role, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(role);
    });
  });
};

// Deletes a role from the DB.
exports.destroy = function(req, res) {
  Role.findById(req.params.id, function (err, role) {
    if(err) { return handleError(res, err); }
    if(!role) { return res.status(404).send('Not Found'); }
    role.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}