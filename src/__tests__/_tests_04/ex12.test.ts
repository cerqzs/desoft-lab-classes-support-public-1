import { checkCapicua } from "../../lab04/functions";

describe('this function receives a number and checks if its capicua', () => {
    test('if the number is 121 the result should be true', () => {
        //arrange

        let num: number = 121;
        let expectedResult = true;
        //act

        let result = checkCapicua(num)
        //assert

        expect(result).toStrictEqual(expectedResult)
    });
});