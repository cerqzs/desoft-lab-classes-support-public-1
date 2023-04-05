import { produtoMultiplos } from "../../lab03/functionslab3";

describe('produto multiplos', () => {
    test('devolve os produtos dos multiplos de 5 no intervalo de 1,2,5,9,10,12,15,19,20, que deverá ser 15000   ', () => {

        //arrange

        const intervalo:number[]= [1,2,5,9,10,12,15,19,20]
        const multiplo:number=5;

        const resultadoEsperado: number = 15000;

        //act

        let result = produtoMultiplos(multiplo,intervalo);

        //assert

        expect(result).toBe(resultadoEsperado);

    })
    
    })