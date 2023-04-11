import { calculoVencimento } from "../../lab03/functionslab3";

describe(' calculo vencimento', () => {
    test('calcula o valor do vencimento consoante o valor do salario e o numero de horas extra, se o salario for 800 e as horas extra 12 o resultado deve ser 992 ', () => {

        //arrange

        const salario:number=800;
        const horasExtra:number= 12;
        const resultadoEsperado=992;
        


        //act

        let result = calculoVencimento(horasExtra,salario);
        

        //assert

        expect(result).toBe(resultadoEsperado);
       
    })    
})
