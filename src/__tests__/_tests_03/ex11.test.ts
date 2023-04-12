import { posicaoProdutoAcumulado } from "../../lab03/functionslab3";

describe('posição do produto acumulado', () => {
    test('devolve a posição onde o produto acumulado dos numeros da lista ultrapassa o numero introduzido a lista de 2 3 4 5 6 e o numero 119 o resultado deve ser 4', () => {

        //arrange

        const lista:number []= [2,3,4,5,6];
        const numero:number= 119;
        const resultadoEsperado=3;
        
        //act

        let result = posicaoProdutoAcumulado(lista,numero);
        
        //assert

        expect(result).toBe(resultadoEsperado);
       
    })    
})