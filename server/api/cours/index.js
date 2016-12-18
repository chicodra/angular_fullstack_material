'use strict';

var express = require('express');
var controller = require('./cours.controller');

var router = express.Router();

router.get('/', controller.index);

// pour avoir les matieres par classe
router.get('/classe/:id', controller.getClasseByCours);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;