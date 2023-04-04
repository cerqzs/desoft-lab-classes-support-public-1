import { descricaoProduto } from "../../lab03/functionslab3";

describe('descrição do produto', () => {
    test('codigo = 1 deve retornar alimento nao perecivel    ', () => {

        //arrange

        const codigo: number = 1;

        const resultadoEsperado: string = "Alimento não perecível";

        //act

        let result = descricaoProduto(codigo);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
})

describe('descrição do produto', () => {
    test('codigo entre 2 e 4 deve retornar Alimento perecível     ', () => {

        //arrange

        const codigo: number = 2;
        const codigo2: number = 3;
        const codigo3: number = 4;

        const resultadoEsperado: string = "Alimento perecível";

        //act

        let result = descricaoProduto(codigo);
        let result2 = descricaoProduto(codigo2);
        let result3 = descricaoProduto(codigo3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado);
        expect(result3).toBe(resultadoEsperado);
    }
    )
})
describe('descrição do produto', () => {
    test('codigo entre 5 e 6 deve retornar Alimento perecível     ', () => {

        //arrange

        const codigo: number = 5;
        const codigo2: number = 5.5;
        const codigo3: number = 6;

        const resultadoEsperado: string = "Vestuário";

        //act

        let result = descricaoProduto(codigo);
        let result2 = descricaoProduto(codigo2);
        let result3 = descricaoProduto(codigo3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado);
        expect(result3).toBe(resultadoEsperado);
    }
    )
})
describe('descrição do produto', () => {
    test('codigo =7  deve retornar Higiene Pessoal e entre 8 e 15 Limpeza e utensílios domésticos , testar mensagem de erro    ', () => {

        //arrange

        const codigo: number = 7;
        const codigo2: number = 8;
        const codigo3: number = 10;
        const codigo4: number = 15;
        const codigo5: number = 5555;

        const resultadoEsperado: string = "Higiene pessoal";
        const resultadoEsperado2: string = "Limpeza e utensílios domésticos";

        //act

        let result = descricaoProduto(codigo);
        let result2 = descricaoProduto(codigo2);
        let result3 = descricaoProduto(codigo3);
        let result4 = descricaoProduto(codigo4);


        //assert
        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        expect(result3).toBe(resultadoEsperado2);
        expect(result4).toBe(resultadoEsperado2);
        expect(() => { descricaoProduto(codigo5) }).toThrow(new Error("Código Inválido"))
    }
    )
})
