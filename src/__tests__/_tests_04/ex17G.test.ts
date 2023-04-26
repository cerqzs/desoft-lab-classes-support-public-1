import { mainDiagonalInMatrix } from "../../lab04/functions";

describe('this function returns the main diagonal of a matrix', () => {
    test('if the matrix is 1 3 3 4 the result should be 1 4', () => {
        //arrange

        let matrix: number[][] = [
            [1, 3],
            [3, 4]
        ]
        let expectResult: number[] = [1, 4];
        //act
        let result = mainDiagonalInMatrix(matrix);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});
