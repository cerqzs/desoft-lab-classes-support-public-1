import { turnNumIntoArray } from "../../lab04/functions";

describe('convert a number into an array', ()=>{
    test('if the number receive is 36781 the position must be [3,6,7,8,1',()=>{
        //arrange
        let num: number = 36781;
        let expectResult: number[] = [3, 6, 7, 8, 1]
        
        //act
        let result = turnNumIntoArray(num);
        
        //assert

        expect(result).toStrictEqual(expectResult);       
    })
})