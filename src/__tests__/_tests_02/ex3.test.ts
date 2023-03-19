import { distanciaEntrePontos } from "../../lab02/functions";

describe ('testar função distancia entre pontos', () => {
    test ('sabendo que o ponto a1 é 14 o a2 24, e o ponto b1 é 47 e o b2 26, a distancia final deve sera de 25', () =>{

        //arrange

        const a1:number= 14;
        const a2:number= 24;
        const b1:number= 47;
        const b2:number = 26;
        const distEsperada:number= 23;

        // act

        let distanciaTotal = distanciaEntrePontos (a1,a2,b1,b2);

        //assert

        expect(distanciaTotal).toBe(distEsperada);
    }
    
    
    )
}
)