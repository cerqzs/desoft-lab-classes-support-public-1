import { calcularTempoECustoTotal } from "../../lab02/functions";

describe ('testar a função calculo Gastos e custo total', () => {
    test ('quando a grama seja 50, o nrº arvores 5 e nrº arbustos 10 o resultado deve ser :Tempo total necessário: 6 horas e um total: 810 € ', () => {

        //arrange

    const areaGrama = 50;
    const numArvores = 5;
    const numArbustos = 10;
    const resultadoEsperado:string= "Tempo total necessário: 6 horas e um total: 810 €";

        //act

        let result= calcularTempoECustoTotal(areaGrama,numArvores,numArbustos);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)