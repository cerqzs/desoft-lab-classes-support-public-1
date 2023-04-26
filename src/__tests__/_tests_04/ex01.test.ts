import { countDigitsNumber } from "../../lab04/functions";

describe('Count how many digits a number has', ()=>{
    test('If receive a number 36781 should return 5 refering to the quantity of digits', ()=>{
        
        //arrange
        const num: number = 36781;
        const expectResult: number = 5;

        //act
        let result = countDigitsNumber(num);

        //assert
        expect(result).toBe(expectResult);        
    })
})