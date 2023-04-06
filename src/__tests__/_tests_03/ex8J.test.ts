import { numeroInteiroInvertido } from "../../lab03/functionslab3";

describe('função numero inteiro invertido', () => {
    test('devolve a inversão de um numero inteiro e mensagem de erro quando 42.5 ', () => {

        //arrange

        const num:number=123456;
        const num2:number= 42.5;
        const resultadoEsperado: number = 654321;

        //act

        let result = numeroInteiroInvertido(num);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect (()=> {numeroInteiroInvertido(num2)}).toThrow(new Error("O numero deve ser inteiro"))
    })    
})