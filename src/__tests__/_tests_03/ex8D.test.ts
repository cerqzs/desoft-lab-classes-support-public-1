import { somaAlgarismosNumInt } from "../../lab03/functionslab3";

describe('soma o número de algarismos de um número inteiro', () => {
    test('devolve a soma dos algarismos de um numero inteiro, sendo o numero 123456 o resultado deverá ser 21 e mensagem de erro quando 42.5 ', () => {

        //arrange

        const num:number=123456;
        const num2:number= 42.5;
        const resultadoEsperado: number = 21;

        //act

        let result = somaAlgarismosNumInt(num);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect (()=> {somaAlgarismosNumInt(num2)}).toThrow(new Error("O numero deve ser inteiro"))
    })    
})