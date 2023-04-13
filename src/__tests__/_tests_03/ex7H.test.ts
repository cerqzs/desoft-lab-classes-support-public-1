import { mediaMultiplosDoisValores } from "../../lab03/functionslab3";
describe('media multiplos dois valores', () => {
    test('devolve a media dos  multiplos de 5 e 3 no intervalo de 1 até 20 que deverá ser 9 ', () => {

        //arrange

        const intervaloInicio:number=1;
        const fimIntervalo:number=20;
        const multiploX:number=5;
        const multiploY:number= 3;

        const resultadoEsperado: number = 10;

        //act

        let result = mediaMultiplosDoisValores(multiploX,multiploY,intervaloInicio,fimIntervalo);

        //assert

        expect(result).toBe(resultadoEsperado);

    })    
})
describe('media multiplos dois valores', () => {
    test('devolve a media dos  multiplos de 5 e 30 no intervalo de 1 até 20 que deverá ser 5', () => {

        //arrange

        const intervaloInicio:number=1;
        const fimIntervalo:number=20;
        const multiploX:number=5;
        const multiploY:number= 30;

        const resultadoEsperado: number = 12;

        //act

        let result = mediaMultiplosDoisValores(multiploX,multiploY,intervaloInicio,fimIntervalo);

        //assert

        expect(result).toBe(resultadoEsperado);

    })    
})