import { indicePoluicao } from "../../lab02/functions";

describe ('testar função indice de poluição', () => {
    test ('Para um indice de 0.1 o resultado deve ser:O indice de poluição é aceitavel ', () => {

        //arrange
        const indice:number= 0.1;
        const resultadoEsperado:string="O indice de poluição é aceitavel"
        //act

        let result= indicePoluicao(indice);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe ('testar função indice de poluição', () => {
    test ('Para um indice de 0.35 o resultado deve ser:As industrias do 1º grupo devem suspender as suas atividades ', () => {

        //arrange
        const indice:number= 0.35;
        const resultadoEsperado:string="As industrias do 1º grupo devem suspender as suas atividades"
        //act

        let result= indicePoluicao(indice);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)
describe ('testar função indice de poluição', () => {
    test ('Para um indice de 0.41 o resultado deve ser:As industrias do 1º e 2º devem suspender as suas atividades ', () => {

        //arrange
        const indice:number= 0.41;
        const resultadoEsperado:string="As industrias do 1º e 2º devem suspender as suas atividades"
        //act

        let result= indicePoluicao(indice);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)
describe ('testar função indice de poluição', () => {
    test ('Para um indice de 0.7 o resultado deve ser:As industrias dos 3 grupos devem suspender as suas atividades ', () => {

        //arrange
        const indice:number= 0.7;
        const resultadoEsperado:string="As industrias dos 3 grupos devem suspender as suas atividades"
        //act

        let result= indicePoluicao(indice);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)
