import { canicultura } from "../../lab03/functionslab3";

describe('canicultura', () => {
    test('se o peso for ate 10kg e a alimentacao 100g retorna 0 se for mais retorna 1 se for abaixo retorna -1', () => {

        //arrange
        const peso1: number = 10;
        const peso2: number = 9;
        const racao: number = 100;
        const racao2: number = 95;
        const racao3: number = 200;



        const resultadoEsperado: number = 0;
        const resultadoEsperado2: number = 1;
        const resultadoEsperado3: number = -1;


        //act
        let result = canicultura(peso1, racao);
        let result2 = canicultura(peso2, racao2);
        let result3 = canicultura(peso2, racao3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado3);
        expect(result3).toBe(resultadoEsperado2);

    })
})
describe('canicultura', () => {
    test('se o peso for mais de 10kg e menor ou igual 25kg e a alimentacao 250g retorna 0 se for mais retorna 1 se for abaixo retorna -1', () => {

        //arrange
        const peso1: number = 25;
        const peso2: number = 12;
        const racao: number = 250;
        const racao2: number = 200;
        const racao3: number = 300;



        const resultadoEsperado: number = 0;
        const resultadoEsperado2: number = 1;
        const resultadoEsperado3: number = -1;


        //act
        let result = canicultura(peso1, racao);
        let result2 = canicultura(peso2, racao2);
        let result3 = canicultura(peso2, racao3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado3);
        expect(result3).toBe(resultadoEsperado2);

    })
})

describe('canicultura', () => {
    test('se o peso for maior 25kg e menor ou igual 45kg e a alimentacao 300g retorna 0 se for mais retorna 1 se for abaixo retorna -1', () => {

        //arrange
        const peso1: number = 26;
        const peso2: number = 45;
        const racao: number = 300;
        const racao2: number = 400;
        const racao3: number = 200;



        const resultadoEsperado: number = 0;
        const resultadoEsperado2: number = 1;
        const resultadoEsperado3: number = -1;


        //act
        let result = canicultura(peso1, racao);
        let result2 = canicultura(peso2, racao2);
        let result3 = canicultura(peso2, racao3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        expect(result3).toBe(resultadoEsperado3);

    })
})

describe('canicultura', () => {
    test('se o peso for maior 45 e a alimentacao 500g retorna 0 se for mais retorna 1 se for abaixo retorna -1', () => {

        //arrange
        const peso1: number = 55;
        const racao: number = 500;
        const racao2: number = 600;
        const racao3: number = 200;



        const resultadoEsperado: number = 0;
        const resultadoEsperado2: number = 1;
        const resultadoEsperado3: number = -1;


        //act
        let result = canicultura(peso1, racao);
        let result2 = canicultura(peso1, racao2);
        let result3 = canicultura(peso1, racao3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        expect(result3).toBe(resultadoEsperado3);

    })
})