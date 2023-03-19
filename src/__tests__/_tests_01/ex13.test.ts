import { calcularDistanciaOperarios } from "../../lab01/ex13";

describe ('Testar função que calcula distancia entre dois operarios', () => {
    test ('sabendo que  o comprimento do cabo1 é de 25M, do cabo2 13M e o cosseno do angulo de 60º que corresponde a 0,5,a  distancia deve ser de 25M', () => {

        //arrange

        const primeiroCabo:number= 25;
        const segundoCabo:number=13;
        const cosseno:number= 0.5;
        const distanciaEsperada:number= 22;

        // act

        let distanciaOp:number= calcularDistanciaOperarios(primeiroCabo,segundoCabo,cosseno);

        //assert

        expect(distanciaOp).toBe(distanciaEsperada);
    }
    )
}
)