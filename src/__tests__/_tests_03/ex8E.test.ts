import { somaAlgarismosPares } from "../../lab03/functionslab3";

describe('soma o número de algarismos pares de um número inteiro', () => {
    test('devolve a soma dos algarismos pares de um numero inteiro, sendo o numero 123456 o resultado deverá ser 12 e mensagem de erro quando 42.5 ', () => {

        //arrange

        const num:number=123456;
        const num2:number= 42.5;
        const resultadoEsperado: number = 12;

        //act

        let result = somaAlgarismosPares(num);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect (()=> {somaAlgarismosPares(num2)}).toThrow(new Error("O numero deve ser inteiro"))
    })    
})