import { identityMatrix } from "../../lab04/functions";

describe('this function returns if a square matrix is a identity matrix', () => {
    test('if the matrix is 1 3 3 4 the result should be false', () => {
        //arrange

        let matrix: number[][] = [
            [1, 3],
            [3, 4]
        ]
        let expectResult = false;
        //act
        let result = identityMatrix(matrix);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});

describe('this function returns if a square matrix is a identity matrix', () => {
    test('if the matrix is 1 3 3 1 the result should be true', () => {
        //arrange

        let matrix: number[][] = [
            [1, 3],
            [3, 1]
        ]
        let expectResult = true;
        //act
        let result = identityMatrix(matrix);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});

describe('this function returns if a square matrix is a identity matrix', () => {
    test('if the matrix not squared the result should be a error', () => {
        //arrange

        let matrix: number[][] = [
            [1, 3],
            [3, 1],
            [5, 3]
        ]
        //act & assert
        expect(() => { identityMatrix(matrix) }).toThrow(new Error("A matriz tem de ser quadrada!"))
    });
});