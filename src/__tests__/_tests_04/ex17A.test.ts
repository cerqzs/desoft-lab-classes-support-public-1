import { smallestValueMatrix } from "../../lab04/functions";

describe('this function returns the smallest value of a matrix', () => {
    test('if the matrix is 1 3 3 4 the result should be 1', () => {
        //arrange

        let matrix: number[][] = [
            [1, 3],
            [3, 4]
        ]
        let expectResult: number = 1;
        //act
        let result = smallestValueMatrix(matrix);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});