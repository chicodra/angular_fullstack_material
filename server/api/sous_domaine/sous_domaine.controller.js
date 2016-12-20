'use strict';

var _ = require('lodash');
var SousDomaine = require('./sous_domaine.model');

// Get list of sous_domaines
exports.index = function(req, res) {
  SousDomaine.find(function (err, sous_domaines) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(sous_domaines);
  });
};

//get sous-domaine by domaine
exports.getSousByDom = function (req, res) { 
  SousDomaine.find({ domaine: req.params.id}, function(err, sous_domaines){
    if(err) { return handleError (res, err); }
    else{
      return res.status(200).json(sous_domaines);
    }
  });
  
};

// Get a single sous_domaine
exports.show = function(req, res) {
  SousDomaine.findById(req.params.id, function (err, sous_domaine) {
    if(err) { return handleError(res, err); }
    if(!sous_domaine) { return res.status(404).send('Not Found'); }
    return res.json(sous_domaine);
  });
};

// Creates a new sous_domaine in the DB.
exports.create = function(req, res) {
  SousDomaine.create(req.body, function(err, sous_domaine) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(sous_domaine);
  });
};

// Updates an existing sous_domaine in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  SousDomaine.findById(req.params.id, function (err, sous_domaine) {
    if (err) { return handleError(res, err); }
    if(!sous_domaine) { return res.status(404).send('Not Found'); }
    var updated = _.merge(sous_domaine, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(sous_domaine);
    });
  });
};

// Deletes a sous_domaine from the DB.
exports.destroy = function(req, res) {
  SousDomaine.findById(req.params.id, function (err, sous_domaine) {
    if(err) { return handleError(res, err); }
    if(!sous_domaine) { return res.status(404).send('Not Found'); }
    sous_domaine.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}