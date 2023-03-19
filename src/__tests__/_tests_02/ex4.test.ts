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
  

