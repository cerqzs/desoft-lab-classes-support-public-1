import { operadoresDivisao } from "../../lab02/functions";

describe ('Testar a função operadores de divisao', () => {
    test (' testar se o numero 456 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

        //arrange

        const numero:number= 456;
        const digitoEsperado:number= 4;

        //act

        let digitoFinal = operadoresDivisao(numero);

        //asset

        expect(digitoFinal).toBe(digitoEsperado);
    }
    )
}
)

describe('Testar a função operadores de divisão', () => {
    test('deve lançar um erro com número 99 por ter menos de 3 dígitos', () => {
      // arrange
      const numero = 99;
  
      // act & assert
      expect(() => {
        operadoresDivisao(numero);
      }).toThrow(RangeError);
    });
  });
  

  describe ('Testar a função operadores de divisao', () => {
    test (' testar se o numero 456 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

        //arrange

        const numero:number= 501;
        const digitoEsperado:number= 5;

        //act

        let digitoFinal = operadoresDivisao(numero);

        //asset

        expect(digitoFinal).toBe(digitoEsperado);
    }
    )
}
)

describe ('Testar a função operadores de divisao', () => {
  test (' testar se o numero 456 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

      //arrange

      const numero:number= 100;
      const digitoEsperado:number= 1;

      //act

      let digitoFinal = operadoresDivisao(numero);

      //asset

      expect(digitoFinal).toBe(digitoEsperado);
  }
  )
}
)
describe ('Testar a função operadores de divisao', () => {
  test (' testar se o numero 456 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

      //arrange

      const numero:number= 999;
      const digitoEsperado:number= 9;

      //act

      let digitoFinal = operadoresDivisao(numero);

      //asset

      expect(digitoFinal).toBe(digitoEsperado);
  }
  )
}
)
describe('Testar a função operadores de divisão', () => {
  test('deve lançar um erro com número 99 por ter menos de 3 dígitos', () => {
    // arrange
    const numero = 9999;

    // act & assert
    expect(() => {
      operadoresDivisao(numero);
    }).toThrow(RangeError);
  });
});

describe ('Testar a função operadores de divisao', () => {
  test (' testar se o numero 111 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

      //arrange

      const numero:number= 111;
      const digitoEsperado:number= 1;

      //act

      let digitoFinal = operadoresDivisao(numero);

      //asset

      expect(digitoFinal).toBe(digitoEsperado);
  }
  )
})
describe ('Testar a função operadores de divisao', () => {
  test (' testar se o numero 222 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

      //arrange

      const numero:number= 222;
      const digitoEsperado:number= 2;

      //act

      let digitoFinal = operadoresDivisao(numero);

      //asset

      expect(digitoFinal).toBe(digitoEsperado);
  }
  )
})
describe ('Testar a função operadores de divisao', () => {
  test (' testar se o numero 333 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

      //arrange

      const numero:number= 333;
      const digitoEsperado:number= 3;

      //act

      let digitoFinal = operadoresDivisao(numero);

      //asset

      expect(digitoFinal).toBe(digitoEsperado);
  }
  )
})
describe ('Testar a função operadores de divisao', () => {
  test (' testar se o numero 444 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

      //arrange

      const numero:number= 444;
      const digitoEsperado:number= 4;

      //act

      let digitoFinal = operadoresDivisao(numero);

      //asset

      expect(digitoFinal).toBe(digitoEsperado);
  }
  )
})
describe ('Testar a função operadores de divisao', () => {
  test (' testar se o numero 555 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

      //arrange

      const numero:number= 555;
      const digitoEsperado:number= 5;

      //act

      let digitoFinal = operadoresDivisao(numero);

      //asset

      expect(digitoFinal).toBe(digitoEsperado);
  }
  )
})
describe ('Testar a função operadores de divisao', () => {
  test (' testar se o numero 666 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

      //arrange

      const numero:number= 666;
      const digitoEsperado:number= 6;

      //act

      let digitoFinal = operadoresDivisao(numero);

      //asset

      expect(digitoFinal).toBe(digitoEsperado);
  }
  )
})
describe ('Testar a função operadores de divisao', () => {
  test (' testar se o numero 777 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

      //arrange

      const numero:number= 777;
      const digitoEsperado:number= 7;

      //act

      let digitoFinal = operadoresDivisao(numero);

      //asset

      expect(digitoFinal).toBe(digitoEsperado);
  }
  )
})
describe ('Testar a função operadores de divisao', () => {
  test (' testar se o numero 888 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

      //arrange

      const numero:number= 888;
      const digitoEsperado:number= 8;

      //act

      let digitoFinal = operadoresDivisao(numero);

      //asset

      expect(digitoFinal).toBe(digitoEsperado);
  }
  )
})
describe('Testar a função operadores de divisão', () => {
  test('deve lançar um erro com número 9999 por ter + de 3 dígitos', () => {
    // arrange
    const numero = 9999;

    // act & assert
    expect(() => {
      operadoresDivisao(numero);
    }).toThrow(RangeError("Número não tem 3 dígitos"));
  });
});

describe ('Testar a função operadores de divisao', () => {
  test (' testar se o numero 846.88 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

      //arrange

      const numero:number= 846.88;
      const digitoEsperado:number= 8;

      //act

      let digitoFinal = operadoresDivisao(numero);

      //asset

      expect(digitoFinal).toBe(digitoEsperado);
  }
  )
})

describe ('Testar a função operadores de divisao', () => {
  test (' testar se o numero 100.1 esta entre 100 e 999 e tem tres digitos, e deve devolver o digito 4', () => {

      //arrange

      const numero:number= 100.1;
      const digitoEsperado:number= 1;

      //act

      let digitoFinal = operadoresDivisao(numero);

      //asset

      expect(digitoFinal).toBe(digitoEsperado);
  }
  )
})