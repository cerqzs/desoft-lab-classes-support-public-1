import { smallValueArray } from "../../lab04/functions";

describe('returns the lowest umber from an array', () => {
    test('if the array is 4 5 6 9 1 the result should be 1', () => {
        //arrange
        let num: number[] = [4, 5, 6, 9, 1];
        let expectResult: number = 1;
        //act

        let result = smallValueArray(num);
        //assert

        expect(result).toBe(expectResult);
    });
});