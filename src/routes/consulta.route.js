const router = require('express').Router();
const consultaController = require('../controllers/consulta.controller');

router.get('/', consultaController.listarConsultas);
router.get('/:id', consultaController.buscarConsultaPorId);
router.post('/', consultaController.criarConsulta);

module.exports = router;
