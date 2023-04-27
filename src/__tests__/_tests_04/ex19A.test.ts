import { matrixProdutByConstant } from "../../lab04/functions";

describe('this function returns the product of a matrix by a constant', () => {
    test('if the matrix is 1 2 10 1  the result should be 2 4 20 2', () => {
        //arrange
        let matrix: number[][] = [
            [1, 2],
            [10, 1]
        ];
        let constant: number = 2;

        let expectResult: number[][] = [
            [2, 4],
            [20, 2]
        ]
        //act

        let result = matrixProdutByConstant(matrix, constant);
        //assert

        expect(result).toStrictEqual(expectResult);
    });
});