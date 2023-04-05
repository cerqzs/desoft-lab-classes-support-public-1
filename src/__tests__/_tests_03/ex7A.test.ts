import { somaPares } from "../../lab03/functionslab3";

describe('soma Pares', () => {
    test('somar os numeros pares presentes no intervalo 3,4,5,6,10,12,15 o resultado deverá ser 32   ', () => {

        //arrange

        const intervalo: number[] = [3,4,5,6,10,12,15];

        const resultadoEsperado: number = 32;

        //act

        let result = somaPares(intervalo);

        //assert

        expect(result).toBe(resultadoEsperado);

    })
    
    })