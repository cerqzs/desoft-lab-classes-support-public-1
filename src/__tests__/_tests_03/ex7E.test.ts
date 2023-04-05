import { somaMultiplos } from "../../lab03/functionslab3";

describe('soma multiplos', () => {
    test('soma os multiplos de 5 num intervalo que começa em 1 e acaba em 20 que devera ser 50  ', () => {

        //arrange

        const inicioIntervalo:number=1;
        const fimIntervalo:number=20;
        const multiplo:number=5;

        const resultadoEsperado: number = 50;

        //act

        let result = somaMultiplos(multiplo,inicioIntervalo,fimIntervalo);

        //assert

        expect(result).toBe(resultadoEsperado);

    })
    
    })