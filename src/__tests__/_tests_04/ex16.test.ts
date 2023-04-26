import { rectangularMatrix } from "../../lab04/functions";

describe('this function returns if a matrix is rectangular or not', () => {
    test('if the matrix is 1 3 3 4 the result should be false', () => {
        //arrange

        let matrix: number[][] = [
            [1, 3],
            [3, 4]
        ]
        let expectResult = false;
        //act
        let result = rectangularMatrix(matrix);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});

describe('this function returns if a matrix is rectangular or not', () => {
    test('if the matrix is 1 3 3 4 3 4  the result should be true', () => {
        //arrange

        let matrix: number[][] = [
            [1, 3],
            [3, 4],
            [3, 4]
        ]
        let expectResult = true;
        //act
        let result = rectangularMatrix(matrix);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});