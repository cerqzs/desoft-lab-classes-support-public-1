import { uniqueElementsArray } from "../../lab04/functions";

describe('this function checks the unique elements of an array', () => {
    test('if the array is 6 6 4 5 5 3 the result should be 4 3', () => {
        //arrange

        let num: number[] = [6, 6, 4, 5, 5, 3];
        let expectResult: number[] = [4, 3];
        //act
        let result = uniqueElementsArray(num);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});