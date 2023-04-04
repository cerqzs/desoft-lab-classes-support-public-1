import { retencaoSalarial } from "../../lab03/functionslab3";

describe('retencao salarial', () => {
    test('testar mensagem de erro e quando salario é menor ou igual a 500.    ', () => {

        //arrange

        const salario1: number = 0;
        const salario2:number= -20 ;
        const salario3:number= 100;
        const salario4:number=500;

        const resultadoEsperado: number =90 ;
        const resultadoEsperado2: number =450 ;

        //act

        let result = retencaoSalarial(salario3);
        let result2 = retencaoSalarial(salario4);
        

        //assert
        expect(()=>{retencaoSalarial(salario2)}).toThrow(new RangeError("O salario tem de ser maior que 0"))
        expect(()=>{retencaoSalarial(salario1)}).toThrow(new RangeError("O salario tem de ser maior que 0"))
        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        
    }
    )
})

describe('retencao salarial', () => {
    test('testar quando os valores sao 600 e 1000.    ', () => {

        //arrange

        const salario1: number = 600;
        const salario2:number= 1000 ;
      

        const resultadoEsperado: number =510;
        const resultadoEsperado2: number =850 ;

        //act

        let result = retencaoSalarial(salario1);
        let result2 = retencaoSalarial(salario2);
        

        //assert
        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        
    }
    )
})

describe('retencao salarial', () => {
    test('testar quando os valores sao 2000 e 1000.    ', () => {

        //arrange

        const salario1: number = 2000;
        const salario2:number= 1000 ;
      

        const resultadoEsperado: number =1600;
        const resultadoEsperado2: number =850 ;

        //act

        let result = retencaoSalarial(salario1);
        let result2 = retencaoSalarial(salario2);
        

        //assert
        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        
    }
    )
})

describe('retencao salarial', () => {
    test('testar quando os valores sao 500 e 510.    ', () => {

        //arrange

        const salario1: number = 500;
        const salario2:number= 510 ;
      

        const resultadoEsperado: number =450;
        const resultadoEsperado2: number =433.5 ;

        //act

        let result = retencaoSalarial(salario1);
        let result2 = retencaoSalarial(salario2);
        

        //assert
        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        
    }
    )
})

describe('retencao salarial', () => {
    test('testar quando os valores sao 500    ', () => {

        //arrange

        const salario1: number = 500;
        
      

        const resultadoEsperado: number =450;
        

        //act

        let result = retencaoSalarial(salario1);
      
        

        //assert
        expect(result).toBe(resultadoEsperado);
       
        
    }
    )
})

describe('retencao salarial', () => {
    test('testar quando os valores sao 500 e 2000.    ', () => {

        //arrange

        const salario1: number = 500;
        const salario2:number= 2000 ;
      

        const resultadoEsperado: number =450;
        const resultadoEsperado2: number =1600 ;

        //act

        let result = retencaoSalarial(salario1);
        let result2 = retencaoSalarial(salario2);
        

        //assert
        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        
    }
    )
})