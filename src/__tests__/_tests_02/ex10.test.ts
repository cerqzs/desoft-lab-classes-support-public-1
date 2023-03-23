import { multiplosCheck, imprimeMensagemMultiplos } from "../../lab02/functions";

describe ('testar função multiploscheck ', () => {
    test ('testar se 10 e 5 sao multiplos, o resultado deve ser true', () => {


        const x:number=10;
        const y:number= 5;
        const resultadoEsperado= true; 

        //act

        let result = multiplosCheck(x,y); 

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)
describe ('testar função multiploscheck ', () => {
    test ('testar se 50 e 200 sao multiplos, o resultado deve ser true', () => {


        const x:number=50;
        const y:number= 200;
        const resultadoEsperado= true; 

        //act

        let result = multiplosCheck(x,y); 

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)
describe ('testar função multiploscheck ', () => {
    test ('testar se 19 e 500 sao multiplos, o resultado deve ser false', () => {


        const x:number=19;
        const y:number= 500;
        const resultadoEsperado= false; 

        //act

        let result = multiplosCheck(x,y); 

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)


describe ('testar função multiploscheck ', () => {
    test ('testar se 100 e 100 sao multiplos, o resultado deve ser true', () => {


        const x:number=100;
        const y:number= 100;
        const resultadoEsperado= true; 

        //act

        let result = multiplosCheck(x,y); 

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe (' testar função imprime mensagem multiplos', () => {
    test (' 20 e 10 sao multiplos, o resultado deve ser 20 é multiplo de 10', () => {


        const x:number=20;
        const y:number= 10;
        const resultadoEsperado:string= "20 é multiplo de 10"

        //act

        let result = imprimeMensagemMultiplos(x,y); 

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe (' testar função imprime mensagem multiplos', () => {
    test (' 150 e 300 sao multiplos, o resultado deve ser 300 é multiplo de 150', () => {


        const x:number=150;
        const y:number= 300;
        const resultadoEsperado:string= "300 é multiplo de 150"

        //act

        let result = imprimeMensagemMultiplos(x,y); 

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe (' testar função imprime mensagem multiplos', () => {
    test (' 39 e 147 não sao multipplos, o resultado deve ser que 39 não é multiplo nem divisor de 147', () => {


        const x:number=39;
        const y:number= 147;
        const resultadoEsperado:string= "39 não é multiplo nem divisor de 147"

        //act

        let result = imprimeMensagemMultiplos(x,y); 

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)