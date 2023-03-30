import { cambio } from "../../lab03/functionslab3";

describe('cambio', () => {
    test('quando moeda for D e o valor 45 o resultado devera ser 69.03   ', () => {

        //arrange

        const moeda: string = "D";
        const valor:number= 45;

        const resultadoEsperado: number = 69;

        //act

        let result = cambio(moeda,valor);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
})

describe('cambio', () => {
    test('quando moeda for L e o valor 55 o resultado devera ser  42.57  ', () => {

        //arrange

        const moeda: string = "L";
        const valor:number= 55;

        const resultadoEsperado: number = 42;

        //act

        let result = cambio(moeda,valor);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
})

describe('cambio', () => {
    test('quando moeda for I e o valor 33 o resultado devera ser  5328.84  ', () => {

        //arrange

        const moeda: string = "I";
        const valor:number= 33;

        const resultadoEsperado: number = 5328;

        //act

        let result = cambio(moeda,valor);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
})

describe('cambio', () => {
    test('quando moeda for C e o valor 80 o resultado devera ser 767.44    ', () => {

        //arrange

        const moeda: string = "C";
        const valor:number= 80 ;

        const resultadoEsperado: number = 767;

        //act

        let result = cambio(moeda,valor);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
})

describe('cambio', () => {
    test('quando moeda for C e o valor 80 o resultado devera ser 767.44    ', () => {

        //arrange

        const moeda: string = "F";
        const valor:number= 150 ;

        const resultadoEsperado: number = 240;

        //act

        let result = cambio(moeda,valor);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
})