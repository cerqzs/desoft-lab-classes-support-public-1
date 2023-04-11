import { classificacaoNumeros } from "../../lab03/functionslab3";

describe(' classificaçao numeros', () => {
    test('o numero 6 deve retornar 0 , 12 deve retornar 1 e o 9 deve retornar -1', () => {

        //arrange
        const numero:number= 6;
        const num2: number= 12;
        const num3:number=9;
        const resultadoEsperado=0;
        const resultadoEsperado2=1;
        const resultadoEsperado3=-1;
        
        //act
        let result = classificacaoNumeros(numero)
        let result2 = classificacaoNumeros(num2)
        let result3 = classificacaoNumeros(num3)
        
        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        expect(result3).toBe(resultadoEsperado3);
       
    })    
})