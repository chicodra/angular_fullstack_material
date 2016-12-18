'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ChapitreSchema = new Schema({
  name: String,
  numero: String,
  cours: Schema.ObjectId,
  contenue: String
});

module.exports = mongoose.model('Chapitre', ChapitreSchema);