import { mediaAlgarismosImpares } from "../../lab03/functionslab3";

describe('calcula a media dos algarismos impares de um numero inteiro', () => {
    test('devolve a media dos algarismos impares de um numero inteiro sendo o numero 123456 o resultado devera ser 4', () => {

        //arrange

        const num:number=123456;
        const resultadoEsperado: number = 3;

        //act

        let result = mediaAlgarismosImpares(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    })    
})

describe('calcula a media dos algarismos impares de um numero inteiro', () => {
    test('devolve a media dos algarismos impares de um numero inteiro sendo o numero 246 o resultado devera ser 0', () => {

        //arrange

        const num:number=246;
        const resultadoEsperado: number = 0;

        //act

        let result = mediaAlgarismosImpares(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    })    
})