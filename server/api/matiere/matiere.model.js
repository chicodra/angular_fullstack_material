'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MatiereSchema = new Schema({
  label: String,
  sous_domaine:{
        type: Schema.Types.ObjectId, ref: 'Sous_Domaine' 
    },
  active: Boolean
});

module.exports = mongoose.model('Matiere', MatiereSchema);