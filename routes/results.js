const express = require('express');
const router = express.Router();
const controller = require('../controllers/result/resultsController');


/* GET home page. */
router.get('/:a/:b',controller.sumar);
router.post('/:a/:b',controller.multiplicar);
router.put('/:a/:b',controller.dividir);
router.delete('/:a/:b',controller.restar);


module.exports = router;
