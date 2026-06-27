const { buscarProfessorNoBanco, buscarStatusProfessorPorCurso } = require('./professorService');

function obterDadosProfessor(id) {
  const professor = buscarProfessorNoBanco(id);
  return {
    nome: professor.nome,
    email: professor.email,
    cpf: professor.cpf
  };
}

function obterStatusProfessor(idCurso) {
  const status = buscarStatusProfessorPorCurso(idCurso);
  return status.status;
}

module.exports = { obterDadosProfessor, obterStatusProfessor };