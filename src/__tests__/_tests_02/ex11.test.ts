import { numeroDeTresDigitos,} from "../../lab02/functions";

describe (' testar função numero de tres digitos', () => {
    test (' o numero 99 não tem tres digitos, deve lançar mensagem de erro', () => {

        //arrange

        const num:number=99;
        
        // act & assert
      expect(() => {
        numeroDeTresDigitos(num);
      }).toThrow(RangeError);
    });
  });

  describe ('testar função numero de tres digitos', () => {
    test ('quando introduzidos 3 numeros entre 100 e 999 verificar se a sequencias destes é crescente ou nao, o numero sera o 258 e deve ser crescente', () => {

        //arrange

        const num:number= 258;
        const resultadoEsperado:string= "A sequencia é crescente.";
        //act

        let result= numeroDeTresDigitos(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe ('testar função numero de tres digitos', () => {
    test ('quando introduzidos 3 numeros entre 100 e 999 verificar se a sequencias destes é crescente ou nao, o numero sera o 222 e deve ser não crescente', () => {

        //arrange

        const num:number= 222;
        const resultadoEsperado:string= "A sequencia não é crescente.";
        //act

        let result= numeroDeTresDigitos(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe ('testar função numero de tres digitos', () => {
    test ('quando introduzidos 3 numeros entre 100 e 999 verificar se a sequencias destes é crescente ou nao, o numero sera o 141 e deve ser não crescente', () => {

        //arrange

        const num:number= 141;
        const resultadoEsperado:string= "A sequencia não é crescente.";
        //act

        let result= numeroDeTresDigitos(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)
describe (' testar função numero de tres digitos', () => {
    test (' o numero 88 não tem tres digitos, deve lançar mensagem de erro', () => {

        //arrange

        const num:number=88;
        
        // act & assert
      expect(() => {
        numeroDeTresDigitos(num);
      }).toThrow(RangeError("O numero deve ter 3 digitos"));
    });
  });

  describe (' testar função numero de tres digitos', () => {
    test (' o numero 88 não tem tres digitos, deve lançar mensagem de erro', () => {

        //arrange

        const num:number=-500;
        
        // act & assert
      expect(() => {
        numeroDeTresDigitos(num);
      }).toThrow(RangeError("O numero deve ter 3 digitos"));
    });
  });
  describe (' testar função numero de tres digitos', () => {
    test (' o numero 88 não tem tres digitos, deve lançar mensagem de erro', () => {

        //arrange

        const num:number=99999;
        
        // act & assert
      expect(() => {
        numeroDeTresDigitos(num);
      }).toThrow(RangeError("O numero deve ter 3 digitos"));
    });
  });

  describe ('testar função numero de tres digitos', () => {
    test ('115', () => {

        //arrange

        const num:number= 115;
        const resultadoEsperado:string= "A sequencia não é crescente.";
        //act

        let result= numeroDeTresDigitos(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)
describe ('testar função numero de tres digitos', () => {
    test ('122', () => {

        //arrange

        const num:number= 122;
        const resultadoEsperado:string= "A sequencia não é crescente.";
        //act

        let result= numeroDeTresDigitos(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)
describe ('testar função numero de tres digitos', () => {
    test ('999', () => {

        //arrange

        const num:number= 999;
        const resultadoEsperado:string= "A sequencia não é crescente.";
        //act

        let result= numeroDeTresDigitos(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)
describe ('testar função numero de tres digitos', () => {
    test ('100', () => {

        //arrange

        const num:number= 100;
        const resultadoEsperado:string= "A sequencia não é crescente.";
        //act

        let result= numeroDeTresDigitos(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

test("lança exceção quando o número não possui três dígitos", () => {
   
   const num1:number= 1;
   const num2:number=10;
   const num3:number=1000;
   
    expect(() => numeroDeTresDigitos(num1)).toThrowError(RangeError("O numero deve ter 3 digitos"));
    expect(() => numeroDeTresDigitos(num2)).toThrowError(RangeError("O numero deve ter 3 digitos"));
    expect(() => numeroDeTresDigitos(num3)).toThrowError(RangeError);
  });
  // ao testar as tres condições no mesmo teste eliminou os mutantes.
  

