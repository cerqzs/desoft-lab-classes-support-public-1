import { verificarCapicua } from "../../lab03/functionslab3";

describe('verificar capicua', () => {
    test('verifica se o numero introduzido é uma capicua, 434 deve devolver true e 411 false ', () => {

        //arrange

        const num:number=434;
        const num2:number= 411;
        const resultadoEsperado=true;
        const resultadoEsperado2= false;


        //act

        let result = verificarCapicua(num);
        let result2 = verificarCapicua(num2);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
    })    
})