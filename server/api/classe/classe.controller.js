'use strict';

var _ = require('lodash');
var Classe = require('./classe.model');

// Get list of classes
exports.index = function(req, res) {
  Classe.find(function (err, classes) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(classes);
  });
};

// Get a single classe
exports.show = function(req, res) {
  Classe.findById(req.params.id, function (err, classe) {
    if(err) { return handleError(res, err); }
    if(!classe) { return res.status(404).send('Not Found'); }
    return res.json(classe);
  });
};

// Creates a new classe in the DB.
exports.create = function(req, res) {
  Classe.create(req.body, function(err, classe) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(classe);
  });
};

// Updates an existing classe in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Classe.findById(req.params.id, function (err, classe) {
    if (err) { return handleError(res, err); }
    if(!classe) { return res.status(404).send('Not Found'); }
    var updated = _.merge(classe, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(classe);
    });
  });
};

// Deletes a classe from the DB.
exports.destroy = function(req, res) {
  Classe.findById(req.params.id, function (err, classe) {
    if(err) { return handleError(res, err); }
    if(!classe) { return res.status(404).send('Not Found'); }
    classe.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}