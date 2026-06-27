const professorService = require('../professorService');
const { obterDadosProfessor, obterStatusProfessor } = require('../professorController');

jest.spyOn(professorService, 'buscarProfessorNoBanco');
jest.spyOn(professorService, 'buscarStatusProfessorPorCurso');

test('deve retornar os dados do professor simulado', () => {
  professorService.buscarProfessorNoBanco.mockReturnValue({
    id: 1,
    nome: 'Carlos Silva',
    email: 'carlos@escola.com',
    cpf: '123.456.789-00'
  });

  const dados = obterDadosProfessor(1);
  expect(dados).toEqual({
    nome: 'Carlos Silva',
    email: 'carlos@escola.com',
    cpf: '123.456.789-00'
  });
});

test('deve retornar o status do professor simulado', () => {
  professorService.buscarStatusProfessorPorCurso.mockReturnValue({
    status: 'determinado'
  });

  const status = obterStatusProfessor(1);
  expect(status).toBe('determinado');
});