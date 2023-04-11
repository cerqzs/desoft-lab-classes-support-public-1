import { contarCapicuas } from "../../lab03/functionslab3";

describe(' contar capicuas', () => {
    test('verifica quantas capicuas existem no intervalo 10 e 33 deve devolver 3', () => {

        //arrange

        const start:number=10;
        const end:number= 33;
        const resultadoEsperado=3;
        


        //act

        let result = contarCapicuas(start,end);
        

        //assert

        expect(result).toBe(resultadoEsperado);
       
    })    
})