import { primeElementsInMatrix } from "../../lab04/functions";

describe('this function returns the prime elements of a matrix', () => {
    test('if the matrix is 1 3 3 4 the result should be 3', () => {
        //arrange

        let matrix: number[][] = [
            [1, 3],
            [3, 4]
        ]
        let expectResult: number[] = [3, 3];
        //act
        let result = primeElementsInMatrix(matrix);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});