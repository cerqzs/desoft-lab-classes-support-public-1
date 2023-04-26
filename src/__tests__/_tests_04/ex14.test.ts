import { numberOfColunsMatrix } from "../../lab04/functions";

describe('this function returns the number of coluns of a matrix', () => {
    test('if the matrix is 1 3 3 4 the result should be 2', () => {
        //arrange

        let matrix: number[][] = [
            [1, 3],
            [3, 4]
        ]
        let expectResult: number= 2;
        //act
        let result = numberOfColunsMatrix(matrix);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});

describe('this function returns the number of coluns of a matrix', () => {
    test('if the matrix is 1 3 3 4 3 4  the result should be -1', () => {
        //arrange

        let matrix: number[][] = [
            [1, 3],
            [3, 4],
            [3, 4]
        ]
        let expectResult: number= -1;
        //act
        let result = numberOfColunsMatrix(matrix);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});
