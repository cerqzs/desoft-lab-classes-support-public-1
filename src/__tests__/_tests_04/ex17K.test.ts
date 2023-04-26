import { transposeMatrix } from "../../lab04/functions";

describe('this function returns the transposed matrix of a matrix', () => {
    test('if the matrix is 2 4 6 7 the result should be 2 6 4 7', () => {
        //arrange

        let matrix: number[][] = [
            [2, 4],
            [6, 7]
        ]
        let expectResult: number[][] = [
            [2, 6],
            [4, 7]
        ];
        //act
        let result = transposeMatrix(matrix);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});