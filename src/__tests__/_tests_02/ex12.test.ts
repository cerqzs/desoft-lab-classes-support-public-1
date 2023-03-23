import { artigoSaldo } from "../../lab02/functions";
describe ('testar função artigo de saldo', () => {
    test ('quando um valor de artigo é introduzido o seu valor final é calculado consoante esse preço. se o valor for de 300 o preço final de saldo será de 180', () => {

        //arrange

        const num:number= 300;
        const resultadoEsperado:number= 180;
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
        const resultadoEsperado:number= 63.6;
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
        const resultadoEsperado:number= 22.5;
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
        const resultadoEsperado:number= 0.4;
        //act

        let result= artigoSaldo(num);

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)