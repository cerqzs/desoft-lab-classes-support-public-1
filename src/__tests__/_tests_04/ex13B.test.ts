import { biggestValueArray } from "../../lab04/functions";

describe('returnes the  bighest number from an array', ()=>{
    test('if the array is 4 5 6 9 1 the result should be 9',()=>{
        //arrange
        let numA: number[] = [ 4, 5, 6, 9, 1];
        let expectResult: number = 9;
        //act

        let result = biggestValueArray(numA);
        //assert

        expect(result).toStrictEqual(expectResult);
    })
})