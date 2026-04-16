// SERVICE: Aqui mora a lógica de negócio da aplicação.
// Esta camada não conhece Express, não conhece req, não conhece res.
// Simulação do cadastro de animais — em breve será uma query no Postgres
const acervo = [
  {
    id: 1,
    nome: 'Teddy',
    raca: 'Labrador',
  },
  {
    id: 2,
    nome: 'Mia',
    raca: 'Siamês',
  },
  {
    id: 3,
    nome: 'Bolt',
    raca: 'Coelho Netherland Dwarf',
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
const criaranimal = async ({ nome, raca }) => {
  if (!nome || !raca) {
    throw new Error('Nome e raça são obrigatórios.');
  }

  const novoanimal = {
    id: acervo.length + 1,
    nome,
    raca,
  };

  acervo.push(novoanimal);
  return novoanimal;
};

module.exports = { listarTodosanimals, buscaranimalPorId, criaranimal };
