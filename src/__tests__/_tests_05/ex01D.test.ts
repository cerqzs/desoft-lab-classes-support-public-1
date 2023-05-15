import { ArrayIntD } from "../../lab05/ArrayInT";

describe('remove the first element of the array', () => {
    test('', () => {
        //arrange
        const arrayB = new ArrayIntD(1, 2, 3, 4, 5)
        let expectedResult: number = 1;


        //act

        let result = arrayB.removeValue();
        //assert

        expect(result).toStrictEqual(expectedResult);
    })
})