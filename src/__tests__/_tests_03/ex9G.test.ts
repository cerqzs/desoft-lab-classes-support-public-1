import { contarArmstrong } from "../../lab03/functionslab3";

describe('contar armstrong', () => {
    test('verifica se existem numeros armstrong no intervalo 100 e 400 deve devolver 3', () => {

        //arrange

        const start:number=100;
        const end:number= 400;
        const resultadoEsperado=3;

        //act

        let result = contarArmstrong(start,end);
        
        //assert

        expect(result).toBe(resultadoEsperado);
       
    })    
})