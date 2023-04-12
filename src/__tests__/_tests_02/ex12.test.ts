import { artigoSaldo } from "../../lab02/functions";
describe ('testar função artigo de saldo', () => {
    test ('quando um valor de artigo é introduzido o seu valor final é calculado consoante esse preço. se o valor for de 300 o preço final de saldo será de 180', () => {

        //arrange

        const num:number= 300;
        const resultadoEsperado:number= 120;
        //act

        let result= artigoSaldo(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe ('testar função artigo de saldo', () => {
    test ('quando um valor de artigo é introduzido o seu valor final é calculado consoante esse preço. se o valor for de 159 o preço final de saldo será de 63.6', () => {

        //arrange

        const num:number= 159;
        const resultadoEsperado:number= 95.4;
        //act

        let result= artigoSaldo(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe ('testar função artigo de saldo', () => {
    test ('quando um valor de artigo é introduzido o seu valor final é calculado consoante esse preço. se o valor for de 75 o preço final de saldo será de 22.5', () => {

        //arrange

        const num:number= 75;
        const resultadoEsperado:number= 52.5;
        //act

        let result= artigoSaldo(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe ('testar função artigo de saldo', () => {
    test ('quando um valor de artigo é introduzido o seu valor final é calculado consoante esse preço. se o valor for de 2 o preço final de saldo será de 0.4', () => {

        //arrange

        const num:number= 2;
        const resultadoEsperado:number= 1.6;
        //act

        let result= artigoSaldo(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe ('testar função artigo de saldo', () => {
    test ('200', () => {

        //arrange

        const num:number= 200;
        const resultadoEsperado:number= 120;
        //act

        let result= artigoSaldo(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)
describe ('testar função artigo de saldo', () => {
    test ('200', () => {

        //arrange

        const num:number= 200;
        const resultadoEsperado:number= 120;
        //act

        let result= artigoSaldo(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)
describe('artigo de saldo',() => {
test("varios valores", () => {
   
    const num1:number= 100;
    const num2:number=150;
    const num3:number=200;
    const num4:number= 50;
    const num5:number=65;
    const result1:number=70;
    const result2:number=90;
    const result3:number=120;
    const result4:number=40;
    const result5:number=45.5;
    
     expect(artigoSaldo(num1)).toBe(result1);
     expect(artigoSaldo(num2)).toBe(result2);
     expect(artigoSaldo(num3)).toBe(result3);
     expect(artigoSaldo(num4)).toBe(result4);
     expect(artigoSaldo(num5)).toBe(result5);
   })
})

  test('artigoSaldo 50/100', () => {
    // com esta combinação eliminamos 3 mutantes

    const num1:number=50;
    const num2:number=100;
    const result1:number=40;
    const result2:number=70;

    expect(artigoSaldo(num1)).toBe(result1);
    expect(artigoSaldo(num2)).toBe(result2);
})