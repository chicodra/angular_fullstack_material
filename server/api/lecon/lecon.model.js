'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LeconSchema = new Schema({
  label: String,
  chapitre:{
        type: Schema.Types.ObjectId, ref: 'Chapitre' 
    },
    rang: Number
});

module.exports = mongoose.model('Lecon', LeconSchema);