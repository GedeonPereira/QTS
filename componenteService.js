function buscarComponenteNoBanco(id) {
  // Imagine que isso acessa banco/API
  return { 
    id, 
    nome: 'Componente Teste',
    horario: { inicio: '19:00', fim: '22:00', dia: 'segunda' }
  };
}

module.exports = { buscarComponenteNoBanco };