import { obterNumero } from "../../lab03/functionslab3";


describe(' obter numero', () => {
    test('dentro do intervalo de 1 a 20, retorne o numero de formas possiveis de obter um numero N somando dois numeros de 0 a 10, o numero 3 deve retornar 3, se introduzido um numero fora do intervalor devolver mensagem de erro', () => {

        //arrange
        const numero:number= 5;
        const num2:number=33;
        const resultadoEsperado:number=3;
    
        
        //act
        let result = obterNumero(numero)
       
        //assert

        expect(result).toBe(resultadoEsperado);
        expect (()=> {obterNumero(num2)}).toThrow(new RangeError(" O numero deve ser entre 1 e 20"))
      
       
    })    
})