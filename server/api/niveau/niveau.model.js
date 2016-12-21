'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NiveauSchema = new Schema({
  label: String,
  abrv: String,
  cycle:{
        type: Schema.Types.ObjectId, ref: 'Cycle'
    }
});

module.exports = mongoose.model('Niveau', NiveauSchema);
