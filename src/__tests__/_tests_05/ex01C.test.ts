import { ArrayIntD } from "../../lab05/ArrayInT";

describe('add values to the object', () => {
    test('', () => {
        //arrange
        const arrayB = new ArrayIntD(1, 2, 3, 4, 5)
        let num: number = 2;
        const expectResult: number[] = [1, 2, 3, 4, 5, 2]


        //act

        let result = arrayB.addValue(num);
        //assert

        expect(result).toStrictEqual(expectResult);
    })
})