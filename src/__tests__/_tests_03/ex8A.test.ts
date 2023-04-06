import { numeroAlgarismosNumInt } from "../../lab03/functionslab3";

describe('numero algarimos de um numero inteiro', () => {
    test('devolve o numero de algarismos de um numero inteiro, sendo o numero 123456 o resultado deverá ser 6  ', () => {

        //arrange

        const num:number=123456;
        const resultadoEsperado: number = 6;

        //act

        let result = numeroAlgarismosNumInt(num);

        //assert

        expect(result).toBe(resultadoEsperado);

    })    
})