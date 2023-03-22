import { numeroPar } from "../../lab02/functions";

describe('Testar função numero par', () => {
    test ('Analisar um numero e retornar True se for par, o numero sera 20 e o resultado devera ser True', () => {

        //arrange 

        const valor:number= 20;
        const resultadoEsperado = true;
        
        // act

        let resultado = numeroPar(valor);

        //assert

        expect(resultado).toBe(resultadoEsperado);
    }
    )
}
)

describe('Testar função numero par', () => {
    test ('Analisar um numero e retornar False se não for par, o numero sera 39 e o resultado devera ser false', () => {

        //arrange 

        const valor:number= 39;
        const resultadoEsperado = false;
        
        // act

        let resultado = numeroPar(valor);

        //assert

        expect(resultado).toBe(resultadoEsperado);
    }
    )
}
)