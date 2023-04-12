import { somaAlgarismosImpares } from "../../lab03/functionslab3";

describe('soma o numero de algarismos impares de um numero inteiro', () => {
    test('devolve a soma dos algarismos impares de um numero inteiro sendo o numero 123456 o resultado devera ser 9 e mensagem de erro quando 42.5', () => {

        //arrange

        const num:number=123456;
        const num2:number= 42.5;
        const resultadoEsperado: number = 9;

        //act

        let result = somaAlgarismosImpares(num);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect (()=> {somaAlgarismosImpares(num2)}).toThrow(new Error("O numero deve ser inteiro"))
    })    
})