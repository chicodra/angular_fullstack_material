'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ChapitreSchema = new Schema({
  label: String,
  matiere:{
        type: Schema.Types.ObjectId, ref: 'Matiere' 
    },
    rang: Number
});

module.exports = mongoose.model('Chapitre', ChapitreSchema);