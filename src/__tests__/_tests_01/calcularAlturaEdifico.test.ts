import { calcularAlturaEdificio } from "../../lab01/ex12";

describe ('Testar função calcular Altura Edificio através dos dados de uma pessoa', () => {
    test ('Sabendo que a sombra do edifico é de 55M, a altura da pessoa 1.8M e a sua sombra 2.1M, a altura do edificio deve ser de 47M', () => {
        
        // arrange

        const sombraEdificio:number= 55;
        const alturaP:number= 1.8;
        const alturaSombraP:number= 2.1;
        const alturaTotalEsperada:number= 47;

        // act

        let alturaTotalEdificio:number= calcularAlturaEdificio(sombraEdificio,alturaP,alturaSombraP);

        // assert

        expect(alturaTotalEdificio).toBe(alturaTotalEsperada);
    }
    
    )
}
)