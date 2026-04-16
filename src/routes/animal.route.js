const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animal.controller');

router.get('/', animalController.listaranimals);
router.get('/:id', animalController.buscaranimalPorId);
router.post('/', animalController.criaranimal);

module.exports = router;
