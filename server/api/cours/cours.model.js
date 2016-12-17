'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CoursSchema = new Schema({
    classe: Schema.ObjectId,
    matiere: Schema.ObjectId,
    coeff: Number
});

module.exports = mongoose.model('Cours', CoursSchema);