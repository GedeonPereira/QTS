const { mesSemestre, dirigir, salario, numero, votar, nparImpar, nmaior} = require('./script');

test('nmaior', () => {
  expect(typeof nmaior).toBe("Number");
  expect(nmaior('6,7')).toBe('o segundo numero é maior')
});

test('nparImpar', () => {
  except(typeof nparImpar).toBe("Number")
  expect(nparImpar('2,2')).toBe('ambos sao pares');
});

test('votar', () => {
  except(typeof votar).toBe("Number");
  except(votar('18')).toBe('voce pode e deve votar')
})

test('numero', () => {
  except(typeof votar).toBe("Number");
  except(votar('18')).toBe('voce pode e deve votar')
})

test('salario', () => {
  except(typeof votar).toBe("Number");
  except(votar('18')).toBe('voce pode e deve votar')
})

test('dirigir', () => {
  except(typeof votar).toBe("Number");
  except(votar('18')).toBe('voce pode e deve votar')
})

test('mesSemestre', () => {
  except(typeof votar).toBe("Number");
  except(votar('18')).toBe('voce pode e deve votar')
})

test('votar', () => {
  except(typeof votar).toBe("Number");
  except(votar('18')).toBe('voce pode e deve votar')
})