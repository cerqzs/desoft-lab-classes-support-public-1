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

describe('salario semanal', () => {
    test('quando as horas semanais forem de 30 o resultado deve ser de   ', () => {

        //arrange

        const horasSemanais: number = 30;
        const resultadoEsperado: number = 270;

        //act

        let result = salarioSemanal(horasSemanais);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
} )

describe('salario semanal', () => {
    test('quando as horas semanais forem de 40 o resultado deve ser de   ', () => {

        //arrange

        const horasSemanais: number = 40;
        const resultadoEsperado: number = 310;

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

describe('salario semanal', () => {
    test('quando as horas semanais forem de 41 o resultado deve ser de   ', () => {

        //arrange

        const horasSemanais: number = 41;
        const resultadoEsperado: number = 320;

        //act

        let result = salarioSemanal(horasSemanais);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
} )

describe('salario semanal', () => {
    test('combo mutantes    ', () => {

        //arrange

        const horasSemanais1: number = 36;
        const resultadoEsperado1: number = 270;
        const horasSemanais2: number = 41;
        const resultadoEsperado2: number = 320;
        const horasSemanais3: number = 40;
        const resultadoEsperado3: number = 310;
        const horasSemanais4: number = 30;
        const resultadoEsperado4: number = 270;

        //act

        let result1 = salarioSemanal(horasSemanais1);
        let result2= salarioSemanal(horasSemanais2)
        let result3 = salarioSemanal(horasSemanais3);
        let result4= salarioSemanal(horasSemanais4)
        //assert

        expect(result1).toBe(resultadoEsperado1);
        expect(result2).toBe(resultadoEsperado2);
        expect(result3).toBe(resultadoEsperado3);
        expect(result4).toBe(resultadoEsperado4);
    }
    )
} )

describe('salario semanal', () => {
    test('mutante <=5  ', () => {

        //arrange

        const horasSemanais1: number = 41;
        const resultadoEsperado1: number = 320;
        const horasSemanais2: number = 42;
        const resultadoEsperado2: number = 335;


        //act

        let result1 = salarioSemanal(horasSemanais1);
        let result2 = salarioSemanal(horasSemanais2)

        //assert

        expect(result1).toBe(resultadoEsperado1);
        expect(result2).toBe(resultadoEsperado2);
    }
    )
} )
describe('salario semanal', () => {
    test('mutante <=5  tentativa 2 ', () => {

        //arrange

        const horasSemanais1: number = 38;
        const resultadoEsperado1: number = 290;
        const horasSemanais2: number = 41;
        const resultadoEsperado2: number = 320;


        //act

        let result1 = salarioSemanal(horasSemanais1);
        let result2 = salarioSemanal(horasSemanais2)

        //assert

        expect(result1).toBe(resultadoEsperado1);
        expect(result2).toBe(resultadoEsperado2);
    }
    )
} )