import { sumDigitPair } from "../../lab04/functions";

describe('this function return the sum of the pair digits of a number', () => {
    test('if the number is 36781 the result should be 14', () => {

        //arrange
        let num: number = 36781;
        let expectResult: number = 14;

        //act

        let result: number = sumDigitPair(num);

        //assert

        expect(result).toBe(expectResult);
    })
})