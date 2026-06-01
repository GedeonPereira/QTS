
js
function maiorValor(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    if (a > b) {
      return `${a} é maior`;
    }

    if (b > a) {
      return `${b} é maior`;
    }

    return 'Os valores são iguais';
  } else {
    return 'Digite números';
  }
}

function parOuImpar(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    let resultadoA = a % 2 === 0 ? 'par' : 'ímpar';
    let resultadoB = b % 2 === 0 ? 'par' : 'ímpar';

    return `${a} é ${resultadoA} e ${b} é ${resultadoB}`;
  } else {
    return 'Digite números';
  }
}

function votar(idade) {
  if (typeof idade === 'number') {
    if (idade < 16) {
      return 'Não pode votar';
    }

    if ((idade >= 16 && idade < 18) || idade >= 70) {
      return 'Voto opcional';
    }

    return 'Pode votar';
  } else {
    return 'Digite um número';
  }
}

function verificarNumero(valor) {
  if (typeof valor === 'number') {
    if (valor > 0) {
      return 'Positivo';
    }

    if (valor < 0) {
      return 'Negativo';
    }

    return 'Igual a zero';
  } else {
    return 'Digite um número';
  }
}

function salario(salario) {
  if (typeof salario === 'number') {
    if (salario >= 5000) {
      return 'O salário tem um bônus de 5%';
    }

    if (salario >= 2000 && salario < 5000) {
      return 'O salário tem um bônus de 10%';
    }

    if (salario < 2000) {
      return 'O salário tem um bônus de 20%';
    }
  } else {
    return 'Digite um número';
  }
}

function dirigir(idade) {
  if (typeof idade === 'number') {
    if (idade >= 18) {
      return 'Pode dirigir';
    }

    return 'Não pode dirigir';
  } else {
    return 'Digite um número';
  }
}

function semestre(mes) {
  if (typeof mes === 'string') {
    mes = mes.toLowerCase();

    if (
      mes === 'janeiro' ||
      mes === 'fevereiro' ||
      mes === 'março' ||
      mes === 'abril' ||
      mes === 'maio' ||
      mes === 'junho'
    ) {
      return 'Primeiro semestre';
    }

    return 'Segundo semestre';
  } else {
    return 'Digite um mês válido';
  }
}

function vogalOuConsoante(letra) {
  if (typeof letra === 'string') {
    letra = letra.toLowerCase();

    if (
      letra === 'a' ||
      letra === 'e' ||
      letra === 'i' ||
      letra === 'o' ||
      letra === 'u'
    ) {
      return 'Vogal';
    }

    return 'Consoante';
  } else {
    return 'Digite uma letra';
  }
}

function media(array) {
  if (typeof array === 'object') {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }

    return `A média é ${soma / array.length}`;
  } else {
    return 'Digite um array';
  }
}

function login(usuario, senha) {
  if (typeof usuario === 'string' && typeof senha === 'string') {
    if (usuario === 'Admin' && senha === '123') {
      return 'Conectado com sucesso!';
    }

    return 'Acesso negado! Usuário ou senha incorretos!';
  } else {
    return 'Digite dados válidos';
  }
}

module.exports = {
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
};

