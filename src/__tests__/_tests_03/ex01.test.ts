import { qualAlgoritmo } from "../../lab03/functionslab3";



describe('qual Algoritmo', () => {
    test('quando o numero introduzido for 12, 1 e 0 o resultado deve ser 479001600, 1 e 1  ', () => {

        //arrange

        const numero: number = 12;
        const numero2: number = 1;
        const numero3: number = 0;
        const resultadoEsperado: number = 479001600;
        const resultadoEsperado2: number = 1;
        const resultadoEsperado3: number = 1;
        //act

        let result = qualAlgoritmo(numero)
        let result2 = qualAlgoritmo(numero2)
        let result3 = qualAlgoritmo(numero3)

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        expect(result3).toBe(resultadoEsperado3);
    }
    )
})

