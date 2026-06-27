const { 
    maiorNumero,
    parOuImpar,
    podeVotar,
    verificarNumero,
    calcularBonus,
    podeDirigir,
    semestreDoMes,
    vogalOuConsoante,
    calcularMedia,
    fazerLogin,
    somar,
    mensagemBoasVindas
} = require('../script');

test('Exercício 1 - Maior de dois números', () => {
    expect(maiorNumero(5, 3)).toBe('5 é maior que 3');
    expect(maiorNumero(2, 8)).toBe('8 é maior que 2');
    expect(maiorNumero(4, 4)).toBe('4 e 4 são iguais');
});

test('Exercício 2 - Par ou Ímpar', () => {
    expect(parOuImpar(4)).toBe('4 é par');
    expect(parOuImpar(7)).toBe('7 é ímpar');
    expect(parOuImpar(0)).toBe('0 é par');
});

test('Exercício 3 - Votação', () => {
    expect(podeVotar(15)).toBe('Com 15 anos: Não pode votar');
    expect(podeVotar(17)).toBe('Com 17 anos: Voto opcional');
    expect(podeVotar(20)).toBe('Com 20 anos: Voto obrigatório');
    expect(podeVotar(71)).toBe('Com 71 anos: Voto opcional');
});

test('Exercício 4 - Positivo, Negativo ou Zero', () => {
    expect(verificarNumero(5)).toBe('5 é positivo');
    expect(verificarNumero(-3)).toBe('-3 é negativo');
    expect(verificarNumero(0)).toBe('0 é zero');
});

test('Exercício 5 - Bônus', () => {
    expect(calcularBonus(1500)).toBe('Salário: R$ 1500, Bônus: R$ 300 (20%)');
    expect(calcularBonus(3000)).toBe('Salário: R$ 3000, Bônus: R$ 300 (10%)');
    expect(calcularBonus(6000)).toBe('Salário: R$ 6000, Bônus: R$ 300 (5%)');
});

test('Exercício 6 - Pode Dirigir', () => {
    expect(podeDirigir(18)).toBe('Com 18 anos: Pode dirigir');
    expect(podeDirigir(16)).toBe('Com 16 anos: Não pode dirigir');
});

test('Exercício 7 - Semestre do Mês', () => {
    expect(semestreDoMes('Janeiro')).toBe('Janeiro é do 1º semestre');
    expect(semestreDoMes('Julho')).toBe('Julho é do 2º semestre');
    expect(semestreDoMes('dezembro')).toBe('dezembro é do 2º semestre');
});

test('Exercício 8 - Vogal ou Consoante', () => {
    expect(vogalOuConsoante('a')).toBe('a é uma vogal');
    expect(vogalOuConsoante('b')).toBe('b é uma consoante');
    expect(vogalOuConsoante('E')).toBe('E é uma vogal');
});

test('Exercício 9 - Média de Array', () => {
    expect(calcularMedia([2, 4, 6, 8, 10])).toBe('Média: 6.00');
    expect(calcularMedia([1, 2, 3])).toBe('Média: 2.00');
    expect(calcularMedia([])).toBe('Array vazio');
});

test('Exercício 10 - Login', () => {
    expect(fazerLogin('Admin', '123')).toBe('Conectado com sucesso!');
    expect(fazerLogin('user', '123')).toBe('Acesso negado! Usuário ou senha incorretos!');
    expect(fazerLogin('Admin', '456')).toBe('Acesso negado! Usuário ou senha incorretos!');
});

test('Funções auxiliares', () => {
    expect(somar(2, 3)).toBe(5);
    expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});