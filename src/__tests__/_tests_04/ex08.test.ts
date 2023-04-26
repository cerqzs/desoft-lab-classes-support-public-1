import { firstNumElementsArray } from "../../lab04/functions";

describe('this function must return the numbers from an array given the numbers', () => {
    test('if given the array 5 6 7 9 8 5 and the number 2 the result should be 5 6', () => {
        //arrange
        let num: number[] = [5, 6, 7, 9, 8, 5];
        let limit: number = 2;
        let expectResult: number[] = [5, 6]
        //act

        let result = firstNumElementsArray(num, limit);

        //assert/

        expect(result).toStrictEqual(expectResult);
    });
});