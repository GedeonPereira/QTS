
const {
  maiorValor,
  parOuImpar,
  votar,
  verificarNumero,
  salario,
  dirigir,
  semestre,
  vogalOuConsoante,
  media,
  login
} = require('./script');

test('maior valor primeiro numero', () => {
  expect(typeof maiorValor(10, 5)).toBe('string');
  expect(maiorValor(10, 5)).toBe('10 é maior');
});

test('maior valor segundo numero', () => {
  expect(typeof maiorValor(5, 10)).toBe('string');
  expect(maiorValor(5, 10)).toBe('10 é maior');
});

test('maior valor iguais', () => {
  expect(typeof maiorValor(5, 5)).toBe('string');
  expect(maiorValor(5, 5)).toBe('Os valores são iguais');
});

test('maior valor erro', () => {
  expect(typeof maiorValor('5', 10)).toBe('string');
  expect(maiorValor('5', 10)).toBe('Digite números');
});

test('par ou impar normal', () => {
  expect(typeof parOuImpar(2, 5)).toBe('string');
  expect(parOuImpar(2, 5)).toBe('2 é par e 5 é ímpar');
});

test('par ou impar pares', () => {
  expect(typeof parOuImpar(4, 8)).toBe('string');
  expect(parOuImpar(4, 8)).toBe('4 é par e 8 é par');
});

test('par ou impar erro', () => {
  expect(typeof parOuImpar('2', 8)).toBe('string');
  expect(parOuImpar('2', 8)).toBe('Digite números');
});

test('nao pode votar', () => {
  expect(typeof votar(12)).toBe('string');
  expect(votar(12)).toBe('Não pode votar');
});

test('voto opcional menor idade', () => {
  expect(typeof votar(16)).toBe('string');
  expect(votar(16)).toBe('Voto opcional');
});

test('voto obrigatorio', () => {
  expect(typeof votar(30)).toBe('string');
  expect(votar(30)).toBe('Pode votar');
});

test('voto opcional idoso', () => {
  expect(typeof votar(75)).toBe('string');
  expect(votar(75)).toBe('Voto opcional');
});

test('votar erro', () => {
  expect(typeof votar('18')).toBe('string');
  expect(votar('18')).toBe('Digite um número');
});

test('numero positivo', () => {
  expect(typeof verificarNumero(10)).toBe('string');
  expect(verificarNumero(10)).toBe('Positivo');
});

test('numero negativo', () => {
  expect(typeof verificarNumero(-10)).toBe('string');
  expect(verificarNumero(-10)).toBe('Negativo');
});

test('numero zero', () => {
  expect(typeof verificarNumero(0)).toBe('string');
  expect(verificarNumero(0)).toBe('Igual a zero');
});

test('numero erro', () => {
  expect(typeof verificarNumero('abc')).toBe('string');
  expect(verificarNumero('abc')).toBe('Digite um número');
});

test('salario bonus 5', () => {
  expect(typeof salario(6000)).toBe('string');
  expect(salario(6000)).toBe('O salário tem um bônus de 5%');
});

test('salario bonus 10', () => {
  expect(typeof salario(3000)).toBe('string');
  expect(salario(3000)).toBe('O salário tem um bônus de 10%');
});

test('salario bonus 20', () => {
  expect(typeof salario(1000)).toBe('string');
  expect(salario(1000)).toBe('O salário tem um bônus de 20%');
});

test('salario erro', () => {
  expect(typeof salario('2000')).toBe('string');
  expect(salario('2000')).toBe('Digite um número');
});

test('pode dirigir', () => {
  expect(typeof dirigir(18)).toBe('string');
  expect(dirigir(18)).toBe('Pode dirigir');
});

test('nao pode dirigir', () => {
  expect(typeof dirigir(15)).toBe('string');
  expect(dirigir(15)).toBe('Não pode dirigir');
});

test('dirigir erro', () => {
  expect(typeof dirigir('18')).toBe('string');
  expect(dirigir('18')).toBe('Digite um número');
});

test('primeiro semestre', () => {
  expect(typeof semestre('Março')).toBe('string');
  expect(semestre('Março')).toBe('Primeiro semestre');
});

test('segundo semestre', () => {
  expect(typeof semestre('Outubro')).toBe('string');
  expect(semestre('Outubro')).toBe('Segundo semestre');
});

test('semestre erro', () => {
  expect(typeof semestre(10)).toBe('string');
  expect(semestre(10)).toBe('Digite um mês válido');
});

test('vogal', () => {
  expect(typeof vogalOuConsoante('a')).toBe('string');
  expect(vogalOuConsoante('a')).toBe('Vogal');
});

test('consoante', () => {
  expect(typeof vogalOuConsoante('b')).toBe('string');
  expect(vogalOuConsoante('b')).toBe('Consoante');
});

test('vogal erro', () => {
  expect(typeof vogalOuConsoante(10)).toBe('string');
  expect(vogalOuConsoante(10)).toBe('Digite uma letra');
});

test('media correta', () => {
  expect(typeof media([10, 10, 10, 10, 10])).toBe('string');
  expect(media([10, 10, 10, 10, 10])).toBe('A média é 10');
});

test('media diferente', () => {
  expect(typeof media([2, 4, 6, 8, 10])).toBe('string');
  expect(media([2, 4, 6, 8, 10])).toBe('A média é 6');
});

test('media erro', () => {
  expect(typeof media('abc')).toBe('string');
  expect(media('abc')).toBe('Digite um array');
});

test('login correto', () => {
  expect(typeof login('Admin', '123')).toBe('string');
  expect(login('Admin', '123')).toBe('Conectado com sucesso!');
});

test('senha errada', () => {
  expect(typeof login('Admin', '321')).toBe('string');
  expect(login('Admin', '321')).toBe(
    'Acesso negado! Usuário ou senha incorretos!'
  );
});

test('usuario errado', () => {
  expect(typeof login('Pedro', '123')).toBe('string');
  expect(login('Pedro', '123')).toBe(
    'Acesso negado! Usuário ou senha incorretos!'
  );
});

test('login erro', () => {
  expect(typeof login(10, true)).toBe('string');
  expect(login(10, true)).toBe('Digite dados válidos');
});

