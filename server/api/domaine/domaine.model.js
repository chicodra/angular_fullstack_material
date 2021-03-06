'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DomaineSchema = new Schema({
  label: String,
  niveau:{
        type: Schema.Types.ObjectId, ref: 'Niveau' 
    }
});

module.exports = mongoose.model('Domaine', DomaineSchema);