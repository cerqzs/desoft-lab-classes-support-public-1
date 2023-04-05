import { contaPares } from "../../lab03/functionslab3";

describe('conta Pares', () => {
    test('contar os numeros pares presentes no intervalo 3,4,5,6,10,12,15 o resultado deverá ser 4   ', () => {

        //arrange

        const intervalo: number[] = [3,4,5,6,10,12,15];

        const resultadoEsperado: number = 4;

        //act

        let result = contaPares(intervalo);

        //assert

        expect(result).toBe(resultadoEsperado);

    })
    
    })