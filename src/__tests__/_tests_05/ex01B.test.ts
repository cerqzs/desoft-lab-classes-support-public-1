import { ArrayIntD } from "../../lab05/ArrayInT";

describe('creat an obect with values', () => {
    test('', () => {
        //arrange
        const arrayB = new ArrayIntD(1, 2, 3, 4, 5)
        const expectResult = new ArrayIntD(1, 2, 3, 4, 5)


        //act
        //assert

        expect(arrayB).toStrictEqual(expectResult);
    })
})