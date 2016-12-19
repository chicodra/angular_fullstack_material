'use strict';

var _ = require('lodash');
var Domaine = require('./domaine.model');

// Get list of domaines
exports.index = function(req, res) {
  Domaine.find(function (err, domaines) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(domaines);
  });
};

// Get a single domaine
exports.show = function(req, res) {
  Domaine.findById(req.params.id, function (err, domaine) {
    if(err) { return handleError(res, err); }
    if(!domaine) { return res.status(404).send('Not Found'); }
    return res.json(domaine);
  });
};

// Creates a new domaine in the DB.
exports.create = function(req, res) {
  Domaine.create(req.body, function(err, domaine) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(domaine);
  });
};

// Updates an existing domaine in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Domaine.findById(req.params.id, function (err, domaine) {
    if (err) { return handleError(res, err); }
    if(!domaine) { return res.status(404).send('Not Found'); }
    var updated = _.merge(domaine, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(domaine);
    });
  });
};

// Deletes a domaine from the DB.
exports.destroy = function(req, res) {
  Domaine.findById(req.params.id, function (err, domaine) {
    if(err) { return handleError(res, err); }
    if(!domaine) { return res.status(404).send('Not Found'); }
    domaine.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}