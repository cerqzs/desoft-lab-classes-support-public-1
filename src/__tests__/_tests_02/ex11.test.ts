import { numeroDeTresDigitos, numeroPar } from "../../lab02/functions";

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