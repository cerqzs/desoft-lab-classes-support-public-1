import { retornarArmstrong } from "../../lab03/functionslab3";

describe(' retornar armstrong', () => {
    test('verifica se existem numeros armstrong no intervalo 100 e 200  deve devolver 153', () => {

        //arrange

        const start:number=100;
        const end:number= 200;
        const resultadoEsperado=153;
        


        //act

        let result = retornarArmstrong(start,end);
        

        //assert

        expect(result).toBe(resultadoEsperado);
       
    })    
})