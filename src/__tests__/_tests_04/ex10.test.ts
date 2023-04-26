import { multiplesInInterval } from "../../lab04/functions";

describe(' this function must return the multiples of a number given in a interval also given', () => {
    test('if it receive 5 as a multiple, in a range from 1 to 10 it must return 5', () => {
        //arrange
        let numMultiple: number = 5;
        let numStart: number = 1;
        let numEnd: number = 10;
        let expectResult: number[] = [5]

        //act
        let result = multiplesInInterval(numStart, numEnd, numMultiple)


        //assert
        expect(result).toStrictEqual(expectResult)
    });
});