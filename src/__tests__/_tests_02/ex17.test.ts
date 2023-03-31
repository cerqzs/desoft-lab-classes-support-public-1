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

describe ('testar função pintores', () => {
    test ('combo mutantantes ', () => {

        //arrange
        const area1:number= 0;
        const area2:number=50;
        const area3:number=100;
        const area4:number=120;
        const area5:number=300;
        const area6:number=500;
        const area7:number=1000;
        const area8:number=1200;

        const salario1:number=100;
        const salario2:number=100;
        const salario3:number=100;
        const salario4:number=100;
        const salario5:number=100;
        const salario6:number=100;
        const salario7:number=100;
        const salario8:number=100;

        const resultado2:number=312.5;
        const resultado3:number=625;
        const resultado4:number=1500;
        const resultado5:number=3750;
        const resultado6:number=9375;
        const resultado7:number=18750;
        const resultado8:number=30000;
        
        //act

        let result2= pintoresPorArea(area2,salario2);
        let result3= pintoresPorArea(area3,salario3);
        let result4= pintoresPorArea(area4,salario4)
        let result5= pintoresPorArea(area5,salario5)
        let result6= pintoresPorArea(area6,salario6)
        let result7= pintoresPorArea(area7,salario7)
        let result8= pintoresPorArea(area8,salario8)

        //assert

        expect(() => pintoresPorArea(area1,salario1)).toThrowError(RangeError("a area tem de ser maior que 0"));
        expect(result2).toBe(resultado2);
        expect(result3).toBe(resultado3);
        expect(result4).toBe(resultado4);
        expect(result5).toBe(resultado5);
        expect(result6).toBe(resultado6);
        expect(result7).toBe(resultado7);
        expect(result8).toBe(resultado8);
        
    }
    )
}
)
describe ('testar função pintores', () => {
    test ('combo mutantantes 2  ', () => {

        //arrange
        const area1:number= 100;
        const area2:number=101;

        const salario1:number=100;
        const salario2:number=100;

        const resultado2:number=625;
        const resultado3:number=1262.5;

        let result2= pintoresPorArea(area1,salario1);
        let result3= pintoresPorArea(area2,salario2);

        expect(result2).toBe(resultado2);
        expect(result3).toBe(resultado3);

    }
    )
}
)