const tutoreservice = require('../services/tutor.service');

// GET /tutores
const listartutores = async (req, res) => {
  try {
    const tutores = await tutoreservice.listarTodostutores();
    res.status(200).json({ total: tutores.length, tutores });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar tutores.' });
  }
};

// GET /tutores/:id — Busca tutor por ID
const buscartutorPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const tutor = await tutoreservice.buscartutorPorId(id);

    if (!tutor) {
      return res.status(404).json({ erro: `Usuário ${id} não encontrado.` });
    }

    res.status(200).json({ tutor });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar usuário.' });
  }
};

// POST /tutores — Cadastra novo tutor
const criartutor = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const novotutor = await tutoreservice.criartutor({ nome, email });

    // 201 = Created — status correto para criação bem-sucedida
    res.status(201).json({
      mensagem: 'Usuário cadastrado com sucesso!',
      tutor: novotutor,
    });
  } catch (erro) {
    // Se o Service lançou um erro de validação, retornamos 400
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listartutores, buscartutorPorId, criartutor };
