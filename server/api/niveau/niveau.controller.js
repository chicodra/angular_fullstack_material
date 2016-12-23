'use strict';

var _ = require('lodash');
var Niveau = require('./niveau.model');

// Get list of niveaus
exports.index = function(req, res) {
  Niveau.find(function (err, niveaus) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(niveaus);
  });
};

// Get a single niveau
exports.show = function(req, res) {
  Niveau.findById(req.params.id, function (err, niveau) {
    if(err) { return handleError(res, err); }
    if(!niveau) { return res.status(404).send('Not Found'); }
    return res.json(niveau);
  });
};

//Get Niveau By Label

exports.GetNiveauByLabel = function(req, res) {
  Niveau.find({label:req.params.id}, function (err, niveau) {
    if(err) { return handleError(res, err); }
    if(!niveau) { return res.status(404).send('Not Found'); }
    return res.json(niveau);
  });
}; 

//Get Niveau by Cycle

exports.getNiveauByCycle = function (req, res) { 
  Niveau.find({ cycle: req.params.id}, function(err, niveaux){
    if(err) { return handleError (res, err); }
    else{
      return res.status(200).json(niveaux);
    }
  });
  
};

// Creates a new niveau in the DB.
exports.create = function(req, res) {
  Niveau.create(req.body, function(err, niveau) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(niveau);
  });
};

// Updates an existing niveau in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Niveau.findById(req.params.id, function (err, niveau) {
    if (err) { return handleError(res, err); }
    if(!niveau) { return res.status(404).send('Not Found'); }
    var updated = _.merge(niveau, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(niveau);
    });
  });
};

// Deletes a niveau from the DB.
exports.destroy = function(req, res) {
  Niveau.findById(req.params.id, function (err, niveau) {
    if(err) { return handleError(res, err); }
    if(!niveau) { return res.status(404).send('Not Found'); }
    niveau.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}