import { primeiraCapicua } from "../../lab03/functionslab3";

describe('primeira capicua', () => {
    test('verifica se existem capicuas no intervalo e devolve a primeira, entre o intervalo 10 e 30 deve devolver o 11  e quando nao existem capicuas mensagem de erro', () => {

        //arrange

        const start:number=10;
        const end:number= 30;
        const start1:number=12;
        const end2:number= 20;
        const resultadoEsperado=11;
        


        //act

        let result = primeiraCapicua(start,end);
        

        //assert

        expect(result).toBe(resultadoEsperado);
        expect (()=> {primeiraCapicua(start1,end2)}).toThrow(new Error("nao existem capicuas no intervalo"))
       
    })    
})