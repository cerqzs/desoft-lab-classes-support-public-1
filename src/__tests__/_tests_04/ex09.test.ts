import { multiplesThreeInInterval } from "../../lab04/functions";

describe('this function return the multiples of three in a interval of numbers', () => {
    test(' in receive a interval of 4 to 10, should return an array 6 and 9', () => {
        //arrange
        let numStart: number = 4;
        let numEnd: number = 10;
        let expectResult: number[] = [6, 9];
        //act

        let result = multiplesThreeInInterval(numStart, numEnd);
        //assert

        expect(result).toStrictEqual(expectResult)
    });
});