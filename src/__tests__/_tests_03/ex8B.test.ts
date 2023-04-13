import { contaAlgarismosImpares } from "../../lab03/functionslab3";
describe('O número de algarismos pares de um número inteiro', () => {
    test('devolve o numero de algarismos pares de um numero inteiro sendo o numero 123456 o resultado devera ser 3', () => {

        //arrange

        const num: number = 123456;
        const resultadoEsperado: number = 3;

        //act

        let result = contaAlgarismosImpares(num);

        //assert

        expect(result).toBe(resultadoEsperado);
       
    })
})
