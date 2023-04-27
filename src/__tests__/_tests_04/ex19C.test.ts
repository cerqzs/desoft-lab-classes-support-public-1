import { productTwoMatrixs } from "../../lab04/functions";

describe('this function returns the product of two matrixs', () => {
    test('if the matrix is 1 2 10 1 and the other one the same the result should be 1 4 100 1', () => {
        //arrange
        let matrix: number[][] = [
            [1, 2],
            [10, 1]
        ];
        let matrix2: number[][] = [
            [1, 2],
            [10, 1]
        ];
        let expectResult: number[][] = [
            [1, 4],
            [100, 1]
        ]
        //act

        let result = productTwoMatrixs(matrix, matrix2);
        //assert

        expect(result).toStrictEqual(expectResult);
    });
});