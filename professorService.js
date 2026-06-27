function buscarProfessorNoBanco(id) {
  // Imagine que isso acessa banco/API
  return { id, nome: 'Professor Teste', email: 'teste@escola.com', cpf: '123.456.789-00' };
}

function buscarStatusProfessorPorCurso(idCurso) {
  // Imagine que isso acessa banco/API
  return { status: 'determinado' };
}

module.exports = { buscarProfessorNoBanco, buscarStatusProfessorPorCurso };