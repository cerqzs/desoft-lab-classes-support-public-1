import { obterNumero } from "../../lab03/functionslab3";


describe('obter numero', () => {
    test('dentro do intervalo de 1 a 20 retorne o numero de formas possiveis de obter um numero N somando dois numeros de 0 a 10 o numero 3 deve retornar 3 se introduzido um numero fora do intervalo devolver mensagem de erro', () => {

        //arrange
        const numero: number = 5;
        const num2: number = 33;
        const resultadoEsperado: number = 3;


        //act
        let result = obterNumero(numero)

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(() => { obterNumero(num2) }).toThrow(new RangeError(" O numero deve ser entre 1 e 20"))


    })
})

describe('obter numero', () => {
    test('dentro do intervalo de 1 a 20 retorne o numero de formas possiveis de obter um numero N somando dois numeros de 0 a 10 o numero 1 deve retornar 1 e 20 retorna 1', () => {

        //arrange
        const numero: number = 1;
        const num2: number = 20;
        const resultadoEsperado: number = 1;
        const resultadoEsperado2: number = 1;


        //act
        let result = obterNumero(numero);
        let result2 = obterNumero(num2);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);



    })
})