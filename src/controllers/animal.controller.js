// CONTROLLER: Coordena a comunicação entre a Rota e o Service.
// Extrai dados do req, chama o Service e formata a resposta com res.
// Nunca contém regra de negócio — apenas orquestração.

const animalService = require('../services/animal.service');

// GET /animais — Lista todos os animais
const listaranimals = async (req, res) => {
  try {
    const animals = await animalService.listarTodosanimals();
    res.status(200).json({ total: animals.length, animals });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar animais.' });
  }
};

// GET /animais/:id — Busca animal por ID
const buscaranimalPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await animalService.buscaranimalPorId(id);

    if (!animal) {
      return res
        .status(404)
        .json({ erro: `Animal ${id} não encontrado.` });
    }

    res.status(200).json({ animal });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar animal.' });
  }
};

// POST /animais — Cadastra novo animal
const criaranimal = async (req, res) => {
  try {
    const { nome, raca } = req.body;
    const novoanimal = await animalService.criaranimal({ nome, raca });

    res.status(201).json({
      mensagem: 'Animal cadastrado com sucesso!',
      animal: novoanimal,
    });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listaranimals, buscaranimalPorId, criaranimal };
