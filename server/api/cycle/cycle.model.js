'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CycleSchema = new Schema({
  label: String,
  active: Boolean
});

module.exports = mongoose.model('Cycle', CycleSchema);