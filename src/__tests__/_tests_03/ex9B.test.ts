import { verificarArmStrong } from "../../lab03/functionslab3";

describe('verificar armstrong', () => {
    test('verifica se o numero introduzido é um numero Armstrong, 1,153,370 devem devolver true e 6,7 e 411 false ', () => {

        //arrange

        const num:number=1;
        const num2:number= 6;
        const num3:number=7;
        const num4:number= 153;
        const num5:number=370;
        const num6:number= 411
        const resultadoEsperado=true;
        const resultadoEsperado2= false;


        //act

        let result = verificarArmStrong(num);
        let result2 = verificarArmStrong(num2);
        let result3 = verificarArmStrong(num3);
        let result4 = verificarArmStrong(num4);
        let result5 = verificarArmStrong(num5);
        let result6 = verificarArmStrong(num6);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        expect(result3).toBe(resultadoEsperado2);
        expect(result4).toBe(resultadoEsperado);
        expect(result5).toBe(resultadoEsperado);
        expect(result6).toBe(resultadoEsperado2);
    })    
})