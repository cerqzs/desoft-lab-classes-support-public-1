import { estafeta } from "../../lab02/functions";

describe('estafeta', () => {
    test('quando as milhas percorridas durante 5 dias forem, 50,20,34,45,5 respetivamente, o resultado devera ser de 49.5572  ', () => {

        //arrange

        const dia1: number = 50;
        const dia2: number = 20;
        const dia3: number = 34;
        const dia4: number = 45;
        const dia5: number = 5;

        const resultadoEsperado: number = 49.5572;

        //act

        let result = estafeta(dia1,dia2,dia3,dia4,dia5);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)