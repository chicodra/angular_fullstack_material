'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CoursSchema = new Schema({
    classe: Schema.ObjectId,
    matiere:{
        type: Schema.Types.ObjectId, ref: 'Matiere' 
    },
    coeff: Number
});

module.exports = mongoose.model('Cours', CoursSchema);