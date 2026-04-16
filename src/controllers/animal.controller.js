// CONTROLLER: Coordena a comunicação entre a Rota e o Service.
// Extrai dados do req, chama o Service e formata a resposta com res.
// Nunca contém regra de negócio — apenas orquestração.

const animalService = require('../services/animal.service');

// GET /animals — Lista todos os animals
const listaranimals = async (req, res) => {
  try {
    const animals = await animalService.listarTodosanimals();
    res.status(200).json({ total: animals.length, animals });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar animals.' });
  }
};

// GET /animals/:id — Busca animal por ID
const buscaranimalPorId = async (req, res) => {
  try {
    // Extrai o parâmetro da URL — essa é a responsabilidade do Controller
    const { id } = req.params;
    const animal = await animalService.buscaranimalPorId(id);

    // Se o Service retornou null, o animal não existe
    if (!animal) {
      return res
        .status(404)
        .json({ erro: `animal ${id} não encontrado no acervo.` });
    }

    res.status(200).json({ animal });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar animal.' });
  }
};

// POST /animais — Cadastra novo animal
const criaranimal = async (req, res) => {
  try {
    const { nome, especie, idade, tutorId } = req.body;
    const novoanimal = await animalService.criaranimal({ nome, especie, idade, tutorId });

    res.status(201).json({
      mensagem: 'Animal cadastrado com sucesso!',
      animal: novoanimal,
    });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listaranimals, buscaranimalPorId, criaranimal };
