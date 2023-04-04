import { multiplosDeTres } from "../../lab03/functionslab3";

describe('multiplos de tres', () => {
    test('contar o numero de multiplos de tres no intervalo de 3,4,5,6,10,12,13   ', () => {

        //arrange

        const intervalo: number[] = [3,4,5,6,10,12,13];

        const resultadoEsperado: number = 3;

        //act

        let result = multiplosDeTres(intervalo);

        //assert

        expect(result).toBe(resultadoEsperado);

    })
    
    })