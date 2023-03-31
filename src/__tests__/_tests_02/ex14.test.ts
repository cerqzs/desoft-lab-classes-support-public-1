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
describe ('testar função indice de poluição', () => {
    test ('combo mutantantes ', () => {

        //arrange
        const indice1:number= 0.3;
        const indice2:number=0.39;
        const indice3:number=0.4;
        const indice4:number=0.49;
        const indice5:number=0.5;
        const indice6:number=0.55; 
        const resultado1:string="O indice de poluição é aceitavel"
        const resultado2:string="As industrias do 1º grupo devem suspender as suas atividades"
        const resultado3:string="As industrias do 1º grupo devem suspender as suas atividades"
        const resultado4:string="As industrias do 1º e 2º devem suspender as suas atividades"
        const resultado5:string="As industrias do 1º e 2º devem suspender as suas atividades"
        const resultado6:string="As industrias dos 3 grupos devem suspender as suas atividades"
        //act

        let result1= indicePoluicao(indice1);
        let result2= indicePoluicao(indice2);
        let result3= indicePoluicao(indice3);
        let result4= indicePoluicao(indice4);
        let result5= indicePoluicao(indice5);
        let result6= indicePoluicao(indice6)

        //assert

        expect(result1).toBe(resultado1);
        expect(result2).toBe(resultado2);
        expect(result3).toBe(resultado3);
        expect(result4).toBe(resultado4);
        expect(result5).toBe(resultado5);
        expect(result6).toBe(resultado6);
        
    }
    )
}
)
