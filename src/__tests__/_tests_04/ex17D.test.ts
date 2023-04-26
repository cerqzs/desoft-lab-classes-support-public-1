import { productValuesMatrix } from "../../lab04/functions";

describe('this function returns the products of the values of a matrix', () => {
    test('if the matrix is 1 3 3 4 the result should be 36', () => {
        //arrange

        let matrix: number[][] = [
            [1, 3],
            [3, 4]
        ]
        let expectResult: number = 36;
        //act
        let result = productValuesMatrix(matrix);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});