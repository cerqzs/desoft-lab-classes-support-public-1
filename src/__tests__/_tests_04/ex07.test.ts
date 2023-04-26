import { sumDigitOdd } from "../../lab04/functions";

describe('this function returns the sum of the odd digits of a number', () => {
    test('if the number is 36781 the result should be 11', () => {

        //arrange
        let num: number = 36781;
        let expectResult: number = 11;

        //act

        let result: number = sumDigitOdd(num);

        //assert

        expect(result).toBe(expectResult);
    })
})