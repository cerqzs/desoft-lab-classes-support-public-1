import { caniculturaB } from "../../lab03/functionslab3";

describe('canicultura', () => {
    test('se o peso for menor ou igual que 0 retorna msg de erro', () => {

        //arrange
        const peso1: number[] = [-10];
        const peso2: number[] = [0];

        const racao: number[] = [100];

        //act assert
        expect(() => { caniculturaB(peso1, racao) }).toThrow(new Error("O peso do cão não pode ser negativo"))
        expect(() => { caniculturaB(peso2, racao) }).toThrow(new Error("O peso do cão não pode ser negativo"))
    })
})

describe('canicultura', () => {
    test('combinação de valores de modo a cobrir todas as linhas', () => {

        //arrange
        const peso1: number[] = [9, 10, 15, 25, 27, 45, 46];
        const racao1: number[] = [100, 100, 250, 250, 300, 300, 500];
        const resultEsperado: number[] = [0, 0, 0, 0, 0, 0, 0];
        const peso2: number[] = [9, 10, 15, 25, 27, 45, 46];
        const racao2: number[] = [120, 120, 275, 275, 350, 350, 600]
        const resultEsperado2: number[] = [1, 1, 1, 1, 1, 1, 1];
        const peso3: number[] = [9, 10, 15, 25, 27, 45, 46];
        const racao3: number[] = [90, 90, 200, 200, 250, 250, 400]
        const resultadoEsperado3: number[] = [-1, -1, -1, -1, -1, -1, -1];

        //act
        let result1 = caniculturaB(peso1, racao1);
        let result2= caniculturaB(peso2,racao2);
        let result3 = caniculturaB(peso3,racao3);

        //assert

        expect(result1).toStrictEqual(resultEsperado);
        expect(result2).toStrictEqual(resultEsperado2);
        expect(result3).toStrictEqual(resultadoEsperado3);

    })
})