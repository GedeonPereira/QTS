const componenteService = require('../componenteService');
const { obterNomeComponente, obterHorarioComponente, obterDadosCompletosComponente } = require('../componenteController');

jest.spyOn(componenteService, 'buscarComponenteNoBanco');

test('deve retornar o nome do componente simulado', () => {
  componenteService.buscarComponenteNoBanco.mockReturnValue({
    id: 1,
    nome: 'Programação Web',
    horario: { inicio: '19:00', fim: '22:00', dia: 'segunda' }
  });

  const nome = obterNomeComponente(1);
  expect(nome).toBe('Programação Web');
});

test('deve retornar o horário do componente simulado', () => {
  componenteService.buscarComponenteNoBanco.mockReturnValue({
    id: 1,
    nome: 'Programação Web',
    horario: { inicio: '19:00', fim: '22:00', dia: 'segunda' }
  });

  const horario = obterHorarioComponente(1);
  expect(horario).toEqual({ inicio: '19:00', fim: '22:00', dia: 'segunda' });
});

test('exemplo com jest.fn - função falsa para componente', () => {
  const funcaoFalsaComponente = jest.fn();
  funcaoFalsaComponente.mockReturnValue({
    nome: 'Componente Mockado',
    horario: { inicio: '10:00', fim: '12:00', dia: 'sexta' },
    statusProfessor: 'determinado'
  });

  const resultado = funcaoFalsaComponente();
  expect(resultado.nome).toBe('Componente Mockado');
  expect(resultado.horario.dia).toBe('sexta');
  expect(resultado.statusProfessor).toBe('determinado');
  expect(funcaoFalsaComponente).toHaveBeenCalled();
});