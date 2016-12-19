'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LeconSchema = new Schema({
  label: String,
  chapitre:{
        type: Schema.Types.ObjectId, ref: 'Chapitre' 
    },
    rang: Number,
  active: Boolean
});

module.exports = mongoose.model('Lecon', LeconSchema);