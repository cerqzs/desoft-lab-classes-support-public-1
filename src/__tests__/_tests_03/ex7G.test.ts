import { mediaMultiplos } from "../../lab03/functionslab3";

describe('media multiplos', () => {
    test('devolve a media dos  multiplos de 5 no intervalo de 1 até 20 que deverá ser 12  ', () => {

        //arrange

        const intervaloInicio:number=1;
        const fimIntervalo:number=20;
        const multiploX:number=5;

        const resultadoEsperado: number = 12;

        //act

        let result = mediaMultiplos(multiploX,intervaloInicio,fimIntervalo);

        //assert

        expect(result).toBe(resultadoEsperado);

    })    
})