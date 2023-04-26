import { returnOddArrayElements } from "../../lab04/functions";

describe('this function must return all the even numbers in a array', () => {
    test('if it receive an array with 3 6 7 8 1 should return 3 7 and 1', () => {

        //arrange

        let num: number[] = [3, 6, 7, 8, 1];
        let expectResult: number[] = [3, 7, 1]
        //act

        let result = returnOddArrayElements(num);

        //assert

        expect(result).toStrictEqual(expectResult);
    })
})