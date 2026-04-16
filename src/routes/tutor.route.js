// ROUTE: Mapeia URLs para funções do Controller.
// Nada mais, nada menos. Sem lógica, sem processamento.

const router = require('express').Router();
const tutorController = require('../controllers/tutor.controller');

router.get('/', tutorController.listartutores);
router.get('/:id', tutorController.buscartutorPorId);
router.post('/', tutorController.criartutor);

module.exports = router;
