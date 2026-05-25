function nmaior(a, b) {
  if (typeof a == Number && typeof b == Number) {
    if (a > b) {
      return "o primeiro numero é maior"
    } else {
      return "o segundo numero é maior"
    }
  } else {
    return "digite um numero"
  }
}

function nparImpar(a, b) {
  if (typeof a == Number && typeof b == Number) {
    if (a % 2 == 0 && b % 2 == 0) {
      return "ambos sao pares"
    }
    if (a % 2 == 0 && b % 2 != 0) {
      return "o primeiro numero é par e o segundo é impar"
    }
    if (a % 2 != 0 && b % 2 == 0){
      return "o primeiro numero é impar e o segundo é par"
    }else {
      return "ambos sao impares"
    }
  } else {
    return "digite um numero"
  }
}

function votar(idade) {
  if (typeof idade == Number) {
    if (idade >= 18) {
      return "voce pode e deve votar"
    }
    if (idade >= 16 && idade < 18 ) {
      return "voce pode mais nao precisa votar "
    }
    if (idade < 16){
      return "voce nao pode votar"
    }else {
      return "digite numeros"
    }
  }
}

function numero(num) {
  if (typeof num == Number) {
    if (num >= 0) {
      return "o numero é positivo"
    }
    if (num == 0 ) {
      return "o numero é nulo "
    }
    if (num < 0){
      return "o numero é negativo"
    }else {
      return "digite um numero"
    }
  }
}

function salario(salario) {
  if (typeof salario == Number) {
    if (salario >= 5000) {
      return "o salario tem um bonus de 5%"
    }
    if (salario >= 2000 && salario < 5000 ) {
      return "o salario tem um bonus de 10%"
    }
    if (salario < 2000){
      return "o salario tem um bonus de 20%"
    }else {
      return "digite um numero"
    }
  }
}

function dirigir(idade) {
  if (typeof idade == Number) {
    if (idade >= 18) {
      return "voce pode dirigir"
    }
    if (idade < 18) {
      return "voce não pode dirigir legalmente né"
    }else {
      return "digite um numero"
    }
  }
}

function mesSemestre(mes) {
  if (typeof mes == Number) {
    if (mes > 0 && mes <= 12) {
      if (mes <= 6) {
        return "seu mes esta no primeiro semestre"
      }
      if (mes > 6) {
        return "seu mes esta no segundo semestre"
      }
    } else {
      return "digite um numero que representa um mes"
    }
  } else {
    return "digite um numero"
  }
}

module.exports {mesSemestre, dirigir, salario, numero, votar, nparImpar, nmaior};