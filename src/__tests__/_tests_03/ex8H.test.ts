import { mediaAlgarismosPares } from "../../lab03/functionslab3";

describe('calcula a media dos algarismos pares de um numero inteiro', () => {
    test('devolve a media dos algarismos pares  de um numero inteiro sendo o numero 123456 o resultado deverá ser 4', () => {

        //arrange

        const num: number = 123456;
        const resultadoEsperado: number = 4;

        //act

        let result = mediaAlgarismosPares(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    })
})
describe('calcula a media dos algarismos pares de um numero inteiro', () => {
    test('devolve a media dos algarismos pares  de um numero inteiro sendo o numero 135 o resultado deverá ser 0', () => {

        //arrange

        const num: number = 135;
        const resultadoEsperado: number = 0;

        //act

        let result = mediaAlgarismosPares(num);

        //assert
        expect(result).toBe(resultadoEsperado);
    })
})