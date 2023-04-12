import { retornarArmstrong } from "../../lab03/functionslab3";

describe('retornar armstrong funcao', () => {
    test('verifica se existem numeros armstrong no intervalo 100 e 200 deve devolver 153 e msg de erro qd nao existem numeros armstrong no intervalo', () => {

        //arrange

        const start:number=100;
        const end:number= 200;
        const start1:number= 100;
        const start2:number=150;
        const resultadoEsperado=153;

        //act

        let result = retornarArmstrong(start,end);
        
        //assert

        expect(result).toBe(resultadoEsperado);
        expect (()=> {retornarArmstrong(start1,start2)}).toThrow(new Error("Não existem numeros armstrong no intervalo"))
       
    })    
})