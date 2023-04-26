import { inverseArray } from "../../lab04/functions";

describe('this function reverses a given array', () => {
    test('if the array is 6 5 4 3 the result should be 3 4 5 6', () => {
        //arrange

        let num: number[] = [6, 5, 4, 3];
        let expectResult: number[] = [3, 4, 5, 6];
        //act
        let result = inverseArray(num);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});