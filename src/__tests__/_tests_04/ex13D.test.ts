import { productArrayElements } from "../../lab04/functions";

describe('this function must multiplie the values of an array', () => {
    test('if the array is 6 2 the result should be 12', () => {
        //arrange

        let num: number[] = [6, 2];
        let expectResult = 12;
        //act
        let result = productArrayElements(num);
        //assert
        expect(result).toBe(expectResult);
    });
});