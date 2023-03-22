import { saudacaoHoraDia } from "../../lab02/functions";

describe ('Testar saudacao Hora do dia', () => {
    test ('consoante os segundos introduzidos devolver saudação do dia apropriada. 21752 deve devolver bom dia', () => {

        //arrange

        const segundos:number= 21752;
        const resultadoEsperado:string= "Bom dia";
        //act

        let horaDia= saudacaoHoraDia(segundos);

        //assert

        expect(horaDia).toBe(resultadoEsperado);
    }
    )
}
)

describe ('Testar saudacao Hora do dia', () => {
    test ('consoante os segundos introduzidos devolver saudação do dia apropriada. 55600 deve devolver boa tarde', () => {

        //arrange

        const segundos:number= 55600;
        const resultadoEsperado:string= "Boa Tarde";
        //act

        let horaDia= saudacaoHoraDia(segundos);

        //assert

        expect(horaDia).toBe(resultadoEsperado);
    }
    )
}
)

describe ('Testar saudacao Hora do dia', () => {
    test ('consoante os segundos introduzidos devolver saudação do dia apropriada. 20500 deve devolver boa noite', () => {

        //arrange

        const segundos:number= 20500;
        const resultadoEsperado:string= "Boa noite";
        //act

        let horaDia= saudacaoHoraDia(segundos);

        //assert

        expect(horaDia).toBe(resultadoEsperado);
    }
    )
}
)