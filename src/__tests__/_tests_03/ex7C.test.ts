import { somaImpares } from "../../lab03/functionslab3";
describe('soma impares', () => {
    test('somar os numeros impares presentes no intervalo 3,4,5,6,10,12,15 o resultado deverá ser 32   ', () => {

        //arrange

        const intervalo: number[] = [3,4,5,6,10,12,15];

        const resultadoEsperado: number = 23;

        //act

        let result = somaImpares(intervalo);

        //assert

        expect(result).toBe(resultadoEsperado);

    })
    
    })