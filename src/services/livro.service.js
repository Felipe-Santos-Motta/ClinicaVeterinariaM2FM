// SERVICE: Aqui mora a lógica de negócio da aplicação.
// Esta camada não conhece Express, não conhece req, não conhece res.
// Simulação do acervo — em breve será uma query no Postgres
const acervo = [
  {
    id: 1,
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    disponivel: true,
  },
  {
    id: 2,
    titulo: 'Altered Carbon',
    autor: 'Richard K. Morgan',
    disponivel: false,
  },
  {
    id: 3,
    titulo: "Assassin's Creed",
    autor: 'Oliver Bowden',
    disponivel: true,
  },
];

// Lista todos os animals do acervo
const listarTodosanimals = async () => {
  return acervo;
};

// Busca um animal específico pelo ID
const buscaranimalPorId = async (id) => {
  const animal = acervo.find((item) => item.id === Number(id));
  // Regra de negócio: se não existe, retorna null.
  // O Controller decide o que fazer com o null.
  return animal || null;
};

// Criar um novo animal no acervo
const criaranimal = async ({ titulo, autor }) => {
  // Regra de negócio: título e autor são obrigatórios
  if (!titulo || !autor) {
    throw new Error('Título e autor são obrigatórios.');
  }
  const novoanimal = {
    id: acervo.length + 1,
    titulo,
    autor,
    disponivel: true,
  };
  acervo.push(novoanimal);
  return novoanimal;
};

module.exports = { listarTodosanimals, buscaranimalPorId, criaranimal };
