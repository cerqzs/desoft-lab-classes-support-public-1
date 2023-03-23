import { notasTurma } from "../../lab02/functions";

describe ('testar função notas da turma', () => {
    test ('Testar as notas de uma turma consoante os parametros, neste teste deve retornar a mensagem valor Invalido porque o nr de aprovados é menor que o limite minimo', () => {

        //arrange

        const aprovados:number= 0.9;
        const limiteMi:number=0.91;
        const limiteMa:number=1;
        const resultadoEsperado:string="Valor invalido"
        //act

        let result= notasTurma(aprovados,limiteMi,limiteMa);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
    describe ('testar função notas da turma', () => {
        test ('Testar as notas de uma turma consoante os parametros, neste teste como aprovados < limite maximo deve retornar valor invalido', () => {
    
            //arrange
    
            const aprovados:number= 0.6;
            const limiteMi:number=0.1;
            const limiteMa:number=0.5;
            const resultadoEsperado:string="Valor invalido"
            //act
    
            let result= notasTurma(aprovados,limiteMi,limiteMa);
    
            //assert
    
            expect(result).toBe(resultadoEsperado);
        }
        )
    }
    )
}
)

describe ('testar função notas da turma', () => {
    test ('Testar as notas de uma turma consoante os parametros, neste teste como aprovados < 0.2 deve retornar turma má', () => {

        //arrange

        const aprovados:number= 0.1;
        const limiteMi:number=0.1;
        const limiteMa:number=1;
        const resultadoEsperado:string="Turma má"
        //act

        let result= notasTurma(aprovados,limiteMi,limiteMa);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe ('testar função notas da turma', () => {
    test ('Testar as notas de uma turma consoante os parametros, neste teste como aprovados < 0.5 deve retornar turma fraca', () => {

        //arrange

        const aprovados:number= 0.48;
        const limiteMi:number=0.2;
        const limiteMa:number=0.9;
        const resultadoEsperado:string="Turma fraca"
        //act

        let result= notasTurma(aprovados,limiteMi,limiteMa);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe ('testar função notas da turma', () => {
    test ('Testar as notas de uma turma consoante os parametros, neste teste como aprovados < 0.7 deve retornar turma razoavel', () => {

        //arrange

        const aprovados:number= 0.66;
        const limiteMi:number=0.5;
        const limiteMa:number=0.68;
        const resultadoEsperado:string="Turma razoavel"
        //act

        let result= notasTurma(aprovados,limiteMi,limiteMa);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe ('testar função notas da turma', () => {
    test ('Testar as notas de uma turma consoante os parametros, neste teste como aprovados < 0.9 deve retornar turma fraca', () => {

        //arrange

        const aprovados:number= 0.88;
        const limiteMi:number=0.2;
        const limiteMa:number=0.9;
        const resultadoEsperado:string="Turma Boa"
        //act

        let result= notasTurma(aprovados,limiteMi,limiteMa);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)
describe ('testar função notas da turma', () => {
    test ('Testar as notas de uma turma consoante os parametros, neste teste como aprovados < 0.5 deve retornar turma fraca', () => {

        //arrange

        const aprovados:number= 0.95;
        const limiteMi:number=0.7;
        const limiteMa:number=1;
        const resultadoEsperado:string="Turma Excelente"
        //act

        let result= notasTurma(aprovados,limiteMi,limiteMa);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

