'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ChapitreSchema = new Schema({
  libelle: String,
  numero: String,
  classe: Schema.ObjectId,
  matiere: Schema.ObjectId,
  contenu: String
});

module.exports = mongoose.model('Chapitre', ChapitreSchema);