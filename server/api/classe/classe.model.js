'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClasseSchema = new Schema({
  libelle: String,
  abrev: String,
  annee_academ: String
});

module.exports = mongoose.model('Classe', ClasseSchema);