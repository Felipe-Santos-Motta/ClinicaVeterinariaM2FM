const animalService = require('./animal.service');
const tutorService = require('./tutor.service');

const consultas = [
  {
    id: 1,
    animalId: 1,
    tutorId: 1,
    data: '2026-04-20T10:00:00',
    descricao: 'Consulta de rotina',
  },
  {
    id: 2,
    animalId: 2,
    tutorId: 2,
    data: '2026-04-21T14:00:00',
    descricao: 'Retorno após vacinação',
  },
];

const listarTodasConsultas = async () => {
  return consultas;
};

const buscarConsultaPorId = async (id) => {
  const consulta = consultas.find((item) => item.id === Number(id));
  return consulta || null;
};

const criarConsulta = async ({ animalId, tutorId, data, descricao }) => {
  if (!animalId || !tutorId || !data) {
    throw new Error('animalId, tutorId e data são obrigatórios.');
  }

  const animal = await animalService.buscaranimalPorId(animalId);
  if (!animal) {
    throw new Error(`Animal ${animalId} não encontrado.`);
  }

  const tutor = await tutorService.buscartutorPorId(tutorId);
  if (!tutor) {
    throw new Error(`Tutor ${tutorId} não encontrado.`);
  }

  const novaConsulta = {
    id: consultas.length + 1,
    animalId: Number(animalId),
    tutorId: Number(tutorId),
    data,
    descricao: descricao || '',
  };

  consultas.push(novaConsulta);
  return novaConsulta;
};

module.exports = { listarTodasConsultas, buscarConsultaPorId, criarConsulta };
