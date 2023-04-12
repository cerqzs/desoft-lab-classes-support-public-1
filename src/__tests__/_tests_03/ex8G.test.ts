import { mediaAlgarismosNumInt } from "../../lab03/functionslab3";

describe('calcula a media dos algarismos de um numero inteiro', () => {
    test('devolve a media dos algarismos de um numero inteiro sendo o numero 123456 o resultado deverá ser 9 e mensagem de erro quando 42.5', () => {

        //arrange

        const num:number=123456;
        const num2:number= 42.5;
        const resultadoEsperado: number = 3;

        //act

        let result = mediaAlgarismosNumInt(num);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect (()=> {mediaAlgarismosNumInt(num2)}).toThrow(new Error("O numero deve ser inteiro"))
    })    
})