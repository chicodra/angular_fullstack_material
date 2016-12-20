'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SousDomaineSchema = new Schema({
  label: String,
  domaine:{
        type: Schema.Types.ObjectId, ref: 'Domaine' 
    }
});

module.exports = mongoose.model('SousDomaine', SousDomaineSchema);