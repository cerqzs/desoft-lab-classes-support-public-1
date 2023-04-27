import { sumTwoMatrixs } from "../../lab04/functions";

describe('this function returns the sum of two matrixs', () => {
    test('if the matrix is 1 2 10 1 and the other one the same the result should be 2 4 20 2', () => {
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
            [2, 4],
            [20, 2]
        ]
        //act

        let result = sumTwoMatrixs(matrix, matrix2);
        //assert

        expect(result).toStrictEqual(expectResult);
    });
});