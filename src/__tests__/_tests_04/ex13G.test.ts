import { returnPrimeNumbers } from "../../lab04/functions";

describe('this function returns the prime numbers of a given array', () => {
    test('if the array is 6 5 4 3 the result should be 5 and 3', () => {
        //arrange

        let num: number[] = [6, 5, 4, 3];
        let expectResult: number[] = [5, 3];
        //act
        let result = returnPrimeNumbers(num);
        //assert
        expect(result).toStrictEqual(expectResult);
    });
});