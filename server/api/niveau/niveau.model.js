'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NiveauSchema = new Schema({
  label: String,
  cycle:{
        type: Schema.Types.ObjectId, ref: 'Cycle' 
    },
  active: Boolean
});

module.exports = mongoose.model('Niveau', NiveauSchema);