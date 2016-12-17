'use strict';

var _ = require('lodash');
var Chapitre = require('./chapitre.model');

// Get list of chapitres
exports.index = function(req, res) {
  Chapitre.find(function (err, chapitres) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(chapitres);
  });
};

// Get a single chapitre
exports.show = function(req, res) {
  Chapitre.findById(req.params.id, function (err, chapitre) {
    if(err) { return handleError(res, err); }
    if(!chapitre) { return res.status(404).send('Not Found'); }
    return res.json(chapitre);
  });
};
exports.showContenu = function(req, res) {
  Chapitre.findById(req.params.id, function (err, chapitre) {
    if(err) { return handleError(res, err); }
    if(!chapitre) { return res.status(404).send('Not Found'); }
    return res.json(chapitre.contenu);
  });
};

//Get Chapitre By matiere and Classe
exports.getByMat = function(req, res) {
  Chapitre.find({matiere:req.params.id,classe:req.params.ids}, function (err, chapitres) {
    if(err) return res.status(500).send(err);
    res.status(200).json(chapitres);
  });
};

// Creates a new chapitre in the DB.
exports.create = function(req, res) {
  Chapitre.create(req.body, function(err, chapitre) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(chapitre);
  });
};

// Updates an existing chapitre in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Chapitre.findById(req.params.id, function (err, chapitre) {
    if (err) { return handleError(res, err); }
    if(!chapitre) { return res.status(404).send('Not Found'); }
    var updated = _.merge(chapitre, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(chapitre);
    });
  });
};

// Deletes a chapitre from the DB.
exports.destroy = function(req, res) {
  Chapitre.findById(req.params.id, function (err, chapitre) {
    if(err) { return handleError(res, err); }
    if(!chapitre) { return res.status(404).send('Not Found'); }
    chapitre.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}