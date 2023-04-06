import { contaAlgarismosImpares } from "../../lab03/functionslab3";

describe('O número de algarismos impares de um número inteiro', () => {
    test('devolve o numero de algarismos impares de um numero inteiro, sendo o numero 123456 o resultado deverá ser 3 e mensagem de erro quando 42.5 ', () => {

        //arrange

        const num:number=123456;
        const num2:number= 42.5;
        const resultadoEsperado: number = 3;

        //act

        let result = contaAlgarismosImpares(num);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect (()=> {contaAlgarismosImpares(num2)}).toThrow(new Error("O numero deve ser inteiro"))
    })    
})