import { classificacaoQualitativa } from "../../lab03/functionslab3";

describe('classificação qualitativa', () => {
    test('testar mensagens de erro    ', () => {

        //arrange

    const nota1:number= 11.7;
    const nota2:number= 55;      
        //act

        //assert

        expect(() => {classificacaoQualitativa(nota1)}).toThrow(new Error("O valor da nota tem de ser um numero inteiro"))
        expect(() => {classificacaoQualitativa(nota2)}).toThrow(RangeError("O valor da nota tem de ser entre 0 e 20"))
    }
    )
})


describe('classificação qualitativa', () => {
    test('quando a nota for entre 0 e 4 deve retornar mau    ', () => {

        //arrange

        const nota1: number = 0;
        const nota2:number= 3;
        const nota3:number= 4;

        const resultadoEsperado: string = "mau";

        //act

        let result = classificacaoQualitativa(nota1);
        let result2 = classificacaoQualitativa(nota2);
        let result3 = classificacaoQualitativa(nota3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado);
        expect(result3).toBe(resultadoEsperado);
    }
    )
})
describe('classificação qualitativa', () => {
    test('quando a nota for entre 5 e 9 deve retornar mediocre    ', () => {

        //arrange

        const nota1: number = 5;
        const nota2:number= 8;
        const nota3:number= 9;

        const resultadoEsperado: string = "mediocre";

        //act

        let result = classificacaoQualitativa(nota1);
        let result2 = classificacaoQualitativa(nota2);
        let result3 = classificacaoQualitativa(nota3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado);
        expect(result3).toBe(resultadoEsperado);
    }
    )
})
describe('classificação qualitativa', () => {
    test('quando a nota for entre 10 e 13 deve retornar suficiente   ', () => {

        //arrange

        const nota1: number = 10;
        const nota2:number= 12;
        const nota3:number= 13;

        const resultadoEsperado: string = "suficiente";

        //act

        let result = classificacaoQualitativa(nota1);
        let result2 = classificacaoQualitativa(nota2);
        let result3 = classificacaoQualitativa(nota3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado);
        expect(result3).toBe(resultadoEsperado);
    }
    )
})
describe('classificação qualitativa', () => {
    test('quando a nota for entre 14 e 17 deve retornar bom   ', () => {

        //arrange

        const nota1: number = 14;
        const nota2:number= 16;
        const nota3:number= 17;

        const resultadoEsperado: string = "bom";

        //act

        let result = classificacaoQualitativa(nota1);
        let result2 = classificacaoQualitativa(nota2);
        let result3 = classificacaoQualitativa(nota3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado);
        expect(result3).toBe(resultadoEsperado);
    }
    )
})
describe('classificação qualitativa', () => {
    test('quando a nota for >17 e <=20 deve retornar muito bom   ', () => {

        //arrange

        const nota1: number = 18;
        const nota2:number= 19;
        const nota3:number= 20;

        const resultadoEsperado: string = "muito bom";

        //act

        let result = classificacaoQualitativa(nota1);
        let result2 = classificacaoQualitativa(nota2);
        let result3 = classificacaoQualitativa(nota3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado);
        expect(result3).toBe(resultadoEsperado);
    }
    )
})