import { averageArrayElements } from "../../lab04/functions";

describe('this function must calculate the average value from an array', () => {
    test('if the array is 5 2 5 6 the result should be 4 ', () => {
        //arrange

        let numA: number[] = [5, 2, 5, 6];
        let expectResult = 4;
        //act
        let result = averageArrayElements(numA);
        //assert
        expect(result).toBe(expectResult);
    });
});