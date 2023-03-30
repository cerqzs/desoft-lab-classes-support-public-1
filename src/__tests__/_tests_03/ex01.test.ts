import { qualAlgoritmo } from "../../lab03/functionslab3";



describe('qual Algoritmo', () => {
    test('quando o numero introduzido for 12 o resultado deve ser 479001600  ', () => {

        //arrange

        const numero: number = 12;


        const resultadoEsperado: number = 479001600;

        //act

        let result = qualAlgoritmo(numero)

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
})