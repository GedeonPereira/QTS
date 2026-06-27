
function maiorNumero(a, b) {
    if (a > b) {
        return `${a} é maior que ${b}`;
    } else if (b > a) {
        return `${b} é maior que ${a}`;
    } else {
        return `${a} e ${b} são iguais`;
    }
}

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return `${numero} é par`;
    } else {
        return `${numero} é ímpar`;
    }
}

function podeVotar(idade) {
    if (idade < 16) {
        return `Com ${idade} anos: Não pode votar`;
    } else if (idade >= 16 && idade < 18) {
        return `Com ${idade} anos: Voto opcional`;
    } else if (idade >= 18 && idade <= 70) {
        return `Com ${idade} anos: Voto obrigatório`;
    } else {
        return `Com ${idade} anos: Voto opcional`;
    }
}

function verificarNumero(numero) {
    if (numero > 0) {
        return `${numero} é positivo`;
    } else if (numero < 0) {
        return `${numero} é negativo`;
    } else {
        return `${numero} é zero`;
    }
}

function calcularBonus(salario) {
    if (salario < 2000) {
        return `Salário: R$ ${salario}, Bônus: R$ ${salario * 0.2} (20%)`;
    } else if (salario >= 2000 && salario <= 5000) {
        return `Salário: R$ ${salario}, Bônus: R$ ${salario * 0.1} (10%)`;
    } else {
        return `Salário: R$ ${salario}, Bônus: R$ ${salario * 0.05} (5%)`;
    }
}

function podeDirigir(idade) {
    if (idade >= 18) {
        return `Com ${idade} anos: Pode dirigir`;
    } else {
        return `Com ${idade} anos: Não pode dirigir`;
    }
}

function semestreDoMes(mes) {
    const mesesPrimeiro = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho'];
    const mesesSegundo = ['julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    
    const mesLower = mes.toLowerCase();
    
    if (mesesPrimeiro.includes(mesLower)) {
        return `${mes} é do 1º semestre`;
    } else if (mesesSegundo.includes(mesLower)) {
        return `${mes} é do 2º semestre`;
    } else {
        return `Mês inválido: ${mes}`;
    }
}

function vogalOuConsoante(letra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    const letraLower = letra.toLowerCase();
    
    if (vogais.includes(letraLower)) {
        return `${letra} é uma vogal`;
    } else {
        return `${letra} é uma consoante`;
    }
}

function calcularMedia(array) {
    if (array.length === 0) return 'Array vazio';
    
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    const media = soma / array.length;
    return `Média: ${media.toFixed(2)}`;
}

function fazerLogin(usuario, senha) {
    if (usuario === 'Admin' && senha === '123') {
        return 'Conectado com sucesso!';
    } else {
        return 'Acesso negado! Usuário ou senha incorretos!';
    }
}

function somar(a, b) {
    return a + b;
}

function mensagemBoasVindas(nome) {
    return `Olá, ${nome}!`;
}


module.exports = { 
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
};