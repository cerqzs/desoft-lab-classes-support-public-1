import { tempoDoDia } from "../../lab02/functions";

describe ('testar função tempo do dia', () => {
    test ('a função transforma o numero de segundos introduzido em horas:minutos:segundos', () =>{

        //arrange

        const segundos:number= 10359;
        const resultadoEsperado:string= "02:52:39";

        // act

        let result= tempoDoDia(segundos);

        //assert
        
        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe ('testar função tempo do dia', () => {
    test ('a função transforma o numero de segundos introduzido em horas:minutos:segundos', () =>{

        //arrange

        const segundos:number= 3600;
        const resultadoEsperado:string= "01:00:00";

        // act

        let result= tempoDoDia(segundos);

        //assert
        
        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe ('testar função tempo do dia', () => {
    test ('a função transforma o numero de segundos introduzido em horas:minutos:segundos', () =>{

        //arrange

        const segundos:number= 500;
        const resultadoEsperado:string= "00:08:20";

        // act

        let result= tempoDoDia(segundos);

        //assert
        
        expect(result).toBe(resultadoEsperado);
    }
    )
}
)