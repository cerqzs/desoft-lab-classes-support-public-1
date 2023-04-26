import { returnEvenArrayElements } from "../../lab04/functions";

describe('this function must return all the even numbers in a array', () => {
    test('if it receive an array with 3 6 7 8 1 should return 6 and 8', () => {
        //arrange
        let num: number[] = [3, 6, 7, 8, 1];
        let expectResult: number[] = [6, 8]
        //act

        let result = returnEvenArrayElements(num);

        //assert

        expect(result).toStrictEqual(expectResult);
    })
})