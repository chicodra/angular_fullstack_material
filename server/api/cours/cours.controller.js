'use strict';

var _ = require('lodash');
var Cours = require('./cours.model');
var Mat = require('../matiere/matiere.model')

// Get list of courss
exports.index = function (req, res) {
  Cours.find(function (err, courss) {
    if (err) { return handleError(res, err); }
    return res.status(200).json(courss);
  });
};

var khol = [];
exports.getClasseByCours = function (req, res) {
  Cours.find({ classe: req.params.id }, function (err, courss) {
    if (err) { return handleError(res, err); }
    else {
      
      courss.forEach(function(element) {
        Mat.find({ _id: element.matiere }, function (err, matieres) {
        if (err) { return handleError(res, err); }
        else {
          khol.push(matieres);
  
        }
      });
      }, this);
       return res.status(200).json(khol);
    }

  });
};

// Get a single cours
exports.show = function (req, res) {
  Cours.findById(req.params.id, function (err, cours) {
    if (err) { return handleError(res, err); }
    if (!cours) { return res.status(404).send('Not Found'); }
    return res.json(cours);
  });
};

// Creates a new cours in the DB.
exports.create = function (req, res) {
  Cours.create(req.body, function (err, cours) {
    if (err) { return handleError(res, err); }
    return res.status(201).json(cours);
  });
};

// Updates an existing cours in the DB.
exports.update = function (req, res) {
  if (req.body._id) { delete req.body._id; }
  Cours.findById(req.params.id, function (err, cours) {
    if (err) { return handleError(res, err); }
    if (!cours) { return res.status(404).send('Not Found'); }
    var updated = _.merge(cours, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(cours);
    });
  });
};

// Deletes a cours from the DB.
exports.destroy = function (req, res) {
  Cours.findById(req.params.id, function (err, cours) {
    if (err) { return handleError(res, err); }
    if (!cours) { return res.status(404).send('Not Found'); }
    cours.remove(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}