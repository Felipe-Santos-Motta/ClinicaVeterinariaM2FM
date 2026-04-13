const express = require('express');
const router = express.Router();
const tutorController = require('../controllers/tutor.controller');

router.get('/', tutorController.listartutores);
router.get('/:id', tutorController.buscartutorPorId);
router.post('/', tutorController.criartutor);

module.exports = router;
