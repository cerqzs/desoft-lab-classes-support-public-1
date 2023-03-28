import { pintoresPorArea, tintaArea } from "../../lab02/functions";

describe('testar a função pintores por area', () => {
    test('quando a area a pintar for de 55 e o salario por dia 75€, o custo do pintor deverá ser de 257.8125   ', () => {

        //arrange

        const area: number = 55;
        const salarioPintorDia: number = 75;


        const resultadoEsperado: number = 257.8125;

        //act

        let result = pintoresPorArea(area, salarioPintorDia);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe('testar a função pintores por area', () => {
    test('quando a area a pintar for de 150 e o salario por dia 20€, o custo dos pintores deverá ser de 375€   ', () => {

        //arrange

        const area: number = 150;
        const salarioPintorDia: number = 20;


        const resultadoEsperado: number = 375;

        //act

        let result = pintoresPorArea(area, salarioPintorDia);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe('testar a função pintores por area', () => {
    test('quando a area a pintar for de 689 e o salario por dia 100€, o custo dos pintores deverá ser de 12918.75€   ', () => {

        //arrange

        const area: number = 689;
        const salarioPintorDia: number = 100;


        const resultadoEsperado: number = 12918.75;

        //act

        let result = pintoresPorArea(area, salarioPintorDia);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe('testar a função pintores por area', () => {
    test('quando a area a pintar for de 1500 e o salario por dia 66€, o custo dos pintores deverá ser de 24750€   ', () => {

        //arrange

        const area: number = 1500;
        const salarioPintorDia: number = 66;


        const resultadoEsperado: number = 24750;

        //act

        let result = pintoresPorArea(area, salarioPintorDia);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe('testar a função tinta por area', () => {
    test('quando a area a pintar for de 1500, o custo do litro da tinta 7.5 e o rendimento da tinta 25 o custo total sera de    ', () => {

        //arrange

        const area: number = 1500;
        const custoLitroTinta: number = 7.5;
        const rendimentoTinta: number = 25;

        const resultadoEsperado: number = 450;

        //act

        let result = tintaArea(area,custoLitroTinta,rendimentoTinta);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)