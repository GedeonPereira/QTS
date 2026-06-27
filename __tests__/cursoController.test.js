const cursoService = require('../cursoService');
const { obterNomeCurso, obterPeriodoCurso } = require('../cursoController');

jest.spyOn(cursoService, 'buscarCursoNoBanco');

test('deve retornar o nome do curso simulado', () => {
  cursoService.buscarCursoNoBanco.mockReturnValue({
    id: 1,
    nome: 'Análise e Desenvolvimento de Sistemas',
    periodo: 'noturno'
  });

  const nome = obterNomeCurso(1);
  expect(nome).toBe('Análise e Desenvolvimento de Sistemas');
});

test('deve retornar o período do curso simulado', () => {
  cursoService.buscarCursoNoBanco.mockReturnValue({
    id: 1,
    nome: 'Análise e Desenvolvimento de Sistemas',
    periodo: 'noturno'
  });

  const periodo = obterPeriodoCurso(1);
  expect(periodo).toBe('noturno');
});