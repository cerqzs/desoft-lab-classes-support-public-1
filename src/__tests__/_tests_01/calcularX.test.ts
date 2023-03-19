import { calcularX } from "../../lab01/ex10";

describe ('Testar função que pretende calcular o valor de X', () => {
    test (' Sabendo que o valor de X é 15, o resultado da expressão deve ser 181', () => {

        //arrange

        const valorX:number= 15;
        const valorExpressaoEsperado:number= 181;

        //act

        let resultadoFinado:number = calcularX(valorX);

        //assert

        expect(resultadoFinado).toBe(valorExpressaoEsperado);
    }
    )

}
)