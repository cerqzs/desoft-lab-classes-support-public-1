import { calculoFuncaoMat } from "../../lab02/functions";

describe ('Testar a função calculoFuncaoMat', () =>{
    test ('Testar a função que inserido um valor X faz o calculo de uma expressão matematica, neste teste o valor será -10 e o valor devolvido deverá ser -10', () =>{

        //arrange

        const x1:number= -10;
        const valorEsperado:number= -10;

        // arrange

        let valorFinal= calculoFuncaoMat(x1);

        // assert 

        expect(valorFinal).toBe(valorEsperado);

    }
    )
}
)

describe ('Testar a função calculoFuncaoMat', () =>{
    test ('Testar a função que inserido um valor X faz o calculo de uma expressão matematica, neste teste o valor será 0 e o valor devolvido deverá ser 0', () =>{

        //arrange

        const x1:number= 0;
        const valorEsperado:number= 0;

        // arrange

        let valorFinal= calculoFuncaoMat(x1);

        // assert 

        expect(valorFinal).toBe(valorEsperado);

    }
    )
}
)

describe ('Testar a função calculoFuncaoMat', () =>{
    test ('Testar a função que inserido um valor X faz o calculo de uma expressão matematica, neste teste o valor será 20 e o valor devolvido deverá ser 0', () =>{

        //arrange

        const x1:number= 10;
        const valorEsperado:number= 0;

        // arrange

        let valorFinal= calculoFuncaoMat(x1);

        // assert 

        expect(valorFinal).toBe(valorEsperado);

    }
    )
}
)
