import { secundaryDiagonalInMatrix } from "../../lab04/functions";

describe('this function returns the secundary diagonal of a matrix', () => {
    test('if the matrix is 1 3 3 4 the result should be 3 3', () => {
        //arrange

        let matrix: number[][] = [
            [1, 3],
            [3, 4]
        ]
        let expectResult: number[] = [3, 3];
        //act
        let result = secundaryDiagonalInMatrix(matrix);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});