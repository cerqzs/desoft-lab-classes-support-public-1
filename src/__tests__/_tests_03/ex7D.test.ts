import { contaImpares } from "../../lab03/functionslab3";

describe('conta impares', () => {
    test('contar os numeros impares presentes no intervalo 3,4,5,6,10,12,15 o resultado deverá ser 4   ', () => {

        //arrange

        const intervalo: number[] = [3,4,5,6,10,12,15];

        const resultadoEsperado: number = 3;

        //act

        let result = contaImpares(intervalo);

        //assert

        expect(result).toBe(resultadoEsperado);

    })
    
    })