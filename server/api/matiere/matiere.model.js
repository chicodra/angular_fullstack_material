'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MatiereSchema = new Schema({
  libelle: String
});

module.exports = mongoose.model('Matiere', MatiereSchema);