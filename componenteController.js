const { buscarComponenteNoBanco } = require('./componenteService');

function obterNomeComponente(id) {
  const componente = buscarComponenteNoBanco(id);
  return componente.nome;
}

function obterHorarioComponente(id) {
  const componente = buscarComponenteNoBanco(id);
  return componente.horario;
}

function obterDadosCompletosComponente(id) {
  const componente = buscarComponenteNoBanco(id);
  return {
    nome: componente.nome,
    horario: componente.horario,
    statusProfessor: 'determinado'
  };
}

module.exports = { obterNomeComponente, obterHorarioComponente, obterDadosCompletosComponente };