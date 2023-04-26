import { multiplesInCommon } from "../../lab04/functions";

describe('this function receive an range of numbers and a range of multiples and return the numbers wich is multiple of both', ()=>{
    test('if receive an interval from 4 to 12, must return 6 and 12',()=>{
        //arrange

        let numStart: number = 4;
        let numEnd: number = 12;
        let multiple1: number[] = [2,3];
        let expectResult: number[] = [6, 12] 
        //act

        let result = multiplesInCommon(numStart, numEnd, multiple1)
        //assert

        expect(result).toStrictEqual(expectResult)
    });
});