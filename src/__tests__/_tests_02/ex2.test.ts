import { analisarValor } from "../../lab02/functions";

describe ('testar função de analisar valor', () => {
    test ('Analisar o valor 6 e caso seja maior ou igual a 8 deve retornar true, neste caso devemos esperar o resultado false', () => {

        // arrange

        const valor:number=6;
        const resultadoEsperado= false;

        // act

        let resultado:boolean = analisarValor(valor);

        //assert

        expect(resultado).toBe(resultadoEsperado);

    }
    )
}
)