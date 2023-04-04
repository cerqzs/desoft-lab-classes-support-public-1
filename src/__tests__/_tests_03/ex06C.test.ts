import { multiplosTresCinco } from "../../lab03/functionslab3";

describe('multiplos de tres e cinco', () => {
    test('contar o numero de multiplos de tres e cinco no intervalo de 3,4,5,6,10,12,15 ', () => {

        //arrange

        const intervalo: number[] = [3,4,5,6,10,12,15];
        const multiploCinco:number =5;

        const resultadoEsperado: number = 7;

        //act

        let result = multiplosTresCinco(intervalo);

        //assert

        expect(result).toBe(resultadoEsperado);

    })
    
    })