// ROUTE: Mapeia URLs para funções do Controller.
// Nada mais, nada menos. Sem lógica, sem processamento.

const router = require('express').Router();
const animalController = require('../controllers/animal.controller');

router.get('/', animalController.listaranimals);
router.get('/:id', animalController.buscaranimalPorId);
router.post('/', animalController.criaranimal);

module.exports = router;
