var express = require('express');
var controller = require('./pl_niveau.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/cycle/:id', controller.getNiveauByCycle);
router.get('/niveau/:lib', controller.getNiveauByLib);
/*router.get('/matiere/:id', controller.getChapitreByMatieres);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);*/

module.exports = router;