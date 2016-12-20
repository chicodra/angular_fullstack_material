'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SousDomaineSchema = new Schema({
  label: String,
  domaine:{
        type: Schema.Types.ObjectId, ref: 'Domaine' 
    },
  active: Boolean
});

module.exports = mongoose.model('Sous_Domaine', SousDomaineSchema);