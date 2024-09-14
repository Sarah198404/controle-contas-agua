const express = require('express');
const router = express.Router();
const contaController = require('../controllers/contaController');

router.post('/', contaController.createConta);

router.get('/', contaController.getContas);

router.get('/loja/:loja_id', contaController.getContasByLoja);

module.exports = router;
