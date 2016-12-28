var express = require('express');
var controller = require('./pv_matd_fils.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/parent/:id', controller.getFilsByPar);

/*router.get('/matiere/:id', controller.getChapitreByMatieres);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);*/

module.exports = router;