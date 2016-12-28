'use strict';

var _ = require('lodash');
var Lecon = require('./lecon.model');

// Get list of lecons
exports.index = function(req, res) {
  Lecon.find(function (err, lecons) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(lecons);
  });
};

// Get a single lecon
exports.show = function(req, res) {
  Lecon.findById(req.params.id, function (err, lecon) {
    if(err) { return handleError(res, err); }
    if(!lecon) { return res.status(404).send('Not Found'); }
    return res.json(lecon);
  });
};

//get Leçons by chapitre

exports.getLeconByChapitre = function (req, res) { 
  Lecon.find({ chapitre: req.params.id}, function(err, lecons){
    if(err) { return handleError (res, err); }
    else{
      return res.status(200).json(lecons);
    }
  });
  
};

// Creates a new lecon in the DB.
exports.create = function(req, res) {
  Lecon.create(req.body, function(err, lecon) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(lecon);
  });
};

// Updates an existing lecon in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Lecon.findById(req.params.id, function (err, lecon) {
    if (err) { return handleError(res, err); }
    if(!lecon) { return res.status(404).send('Not Found'); }
    var updated = _.merge(lecon, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(lecon);
    });
  });
};

// Deletes a lecon from the DB.
exports.destroy = function(req, res) {
  Lecon.findById(req.params.id, function (err, lecon) {
    if(err) { return handleError(res, err); }
    if(!lecon) { return res.status(404).send('Not Found'); }
    lecon.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}