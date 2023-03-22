import { volumeCubo } from "../../lab02/functions";

describe ('Testar função volumeCubo', () => {
    test ('Inserido o valor da area de um cubo, o valor do seu volume é calculado e consoante esse valor apresenta o seu tamanho. area de 120  deve dar Pequeno', () => {

        // arrange

        const area:number= 120;
        const resultadoEsperado:string= "Pequeno";

        // act

        let resultado= volumeCubo(area);

        //assert 

        expect(resultado).toBe(resultadoEsperado);
    }
    )
}
)

describe ('Testar função volumeCubo', () => {
    test ('Inserido o valor da area de um cubo, o valor do seu volume é calculado e consoante esse valor apresenta o seu tamanho. area de 1600  deve dar Grande', () => {

        // arrange

        const area:number= 1600;
        const resultadoEsperado:string= "Grande";

        // act

        let resultado= volumeCubo(area);

        //assert 

        expect(resultado).toBe(resultadoEsperado);
    }
    )
}
)
describe ('Testar função volumeCubo', () => {
    test ('Inserido o valor da area de um cubo, o valor do seu volume é calculado e consoante esse valor apresenta o seu tamanho. area de 800  deve dar médio', () => {

        // arrange

        const area:number= 800;
        const resultadoEsperado:string= "médio";

        // act

        let resultado= volumeCubo(area);

        //assert 

        expect(resultado).toBe(resultadoEsperado);
    }
    )
}
)