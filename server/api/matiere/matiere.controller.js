'use strict';

var _ = require('lodash');
var Matiere = require('./matiere.model');

// Get list of matieres
exports.index = function(req, res) {
  Matiere.find(function (err, matieres) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(matieres);
  });
};

// Get a single matiere
exports.show = function(req, res) {
  Matiere.findById(req.params.id, function (err, matiere) {
    if(err) { return handleError(res, err); }
    if(!matiere) { return res.status(404).send('Not Found'); }
    return res.json(matiere);
  });
};

// Creates a new matiere in the DB.
exports.create = function(req, res) {
  Matiere.create(req.body, function(err, matiere) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(matiere);
  });
};

// Updates an existing matiere in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Matiere.findById(req.params.id, function (err, matiere) {
    if (err) { return handleError(res, err); }
    if(!matiere) { return res.status(404).send('Not Found'); }
    var updated = _.merge(matiere, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(matiere);
    });
  });
};

// Deletes a matiere from the DB.
exports.destroy = function(req, res) {
  Matiere.findById(req.params.id, function (err, matiere) {
    if(err) { return handleError(res, err); }
    if(!matiere) { return res.status(404).send('Not Found'); }
    matiere.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}