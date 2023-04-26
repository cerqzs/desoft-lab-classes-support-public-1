import { separacaoParesImpares } from "../../lab03/functionslab3";

describe('lista de pares a direita e impares a esquerda', () => {
    test('se a sequencia for 1 2 3 4 5 6 7 8 9  deve devolver 1 3 5 7 9 2 4 6 8', () => {

        //arrange
        const num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const resultEsperado: number[] = [1, 3, 5, 7, 9, 2, 4, 6, 8]

        //act

        let result1= separacaoParesImpares(num)
        //assert

        expect(result1).toStrictEqual(resultEsperado)
    })
})