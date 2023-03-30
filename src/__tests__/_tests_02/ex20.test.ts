import { salarioSemanal } from "../../lab02/functions";

describe('salario semanal', () => {
    test('quando as horas semanais forem de 46 o resultado deve ser de   ', () => {

        //arrange

        const horasSemanais: number = 46;
        const resultadoEsperado: number = 395;

        //act

        let result = salarioSemanal(horasSemanais);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
} )

describe('salario semanal', () => {
    test('quando as horas semanais forem de 38 o resultado deve ser de   ', () => {

        //arrange

        const horasSemanais: number = 38;
        const resultadoEsperado: number = 290;

        //act

        let result = salarioSemanal(horasSemanais);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
} )

describe('salario semanal', () => {
    test('quando as horas semanais forem de 36 o resultado deve ser de   ', () => {

        //arrange

        const horasSemanais: number = 36;
        const resultadoEsperado: number = 270;

        //act

        let result = salarioSemanal(horasSemanais);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
} )