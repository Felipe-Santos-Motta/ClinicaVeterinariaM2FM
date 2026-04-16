// SERVICE: Aqui mora a lógica de negócio da aplicação.
// Esta camada não conhece Express, não conhece req, não conhece res.
// Simulação do cadastro de animais — em breve será uma query no Postgres
const acervo = [
  {
    id: 1,
    nome: 'Teddy',
    especie: 'Cão',
    idade: 5,
    tutorId: 1,
  },
  {
    id: 2,
    nome: 'Mia',
    especie: 'Gato',
    idade: 3,
    tutorId: 2,
  },
  {
    id: 3,
    nome: 'Bolt',
    especie: 'Coelho',
    idade: 2,
    tutorId: 3,
  },
];

// Lista todos os animais cadastrados
const listarTodosanimals = async () => {
  return acervo;
};

// Busca um animal específico pelo ID
const buscaranimalPorId = async (id) => {
  const animal = acervo.find((item) => item.id === Number(id));
  return animal || null;
};

// Criar um novo animal
const criaranimal = async ({ nome, especie, idade, tutorId }) => {
  if (!nome || !especie || !idade || !tutorId) {
    throw new Error('Nome, espécie, idade e tutorId são obrigatórios.');
  }

  const novoanimal = {
    id: acervo.length + 1,
    nome,
    especie,
    idade: Number(idade),
    tutorId: Number(tutorId),
  };

  acervo.push(novoanimal);
  return novoanimal;
};

module.exports = { listarTodosanimals, buscaranimalPorId, criaranimal };
