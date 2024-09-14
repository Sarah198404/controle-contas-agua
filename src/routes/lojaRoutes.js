const express = require('express');
const router = express.Router();
const lojaController = require('../controllers/lojaController');

router.post('/', lojaController.createLoja);
router.get('/', lojaController.getLojas);

module.exports = router;
