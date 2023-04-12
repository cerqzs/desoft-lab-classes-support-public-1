import { maiorCapicua } from "../../lab03/functionslab3";

describe('capicua maior', () => {
    test('verifica qual a capicua maior no intervalo 10 e 33 deve devolver 33', () => {

        //arrange

        const start:number=10;
        const end:number= 33;
        const resultadoEsperado=33;
        


        //act

        let result = maiorCapicua(start,end);
        

        //assert

        expect(result).toBe(resultadoEsperado);
       
    })    
})

describe('capicua maior', () => {
    test('verifica qual a capicua maior no intervalo 10 e 33 deve devolver 33', () => {

        //arrange

        const start:number=10;
        const end:number= 33;
        const resultadoEsperado=33;
        


        //act

        let result = maiorCapicua(start,end);
        

        //assert

        expect(result).toBe(resultadoEsperado);
       
    })    
})