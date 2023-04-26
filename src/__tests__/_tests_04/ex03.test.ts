import { sumArrayElements } from "../../lab04/functions";

describe('given an array returns the sum of the elements in the array', () => {
    test('when the array is 1,2,3,4 the result should be 10', () => {

        // arrange

        let array: number[] = [1, 2, 3, 4];
        let expectedResult: number = 10;

        // act

        let result = sumArrayElements(array);

        //assert

        expect(result).toBe(expectedResult);
    })
})