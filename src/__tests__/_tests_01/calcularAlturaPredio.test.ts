import { calcularAlturaPredio } from "../../lab01/ex11";

describe ('Testar função calcular a altura de um predio', () => {
    test ('Sabendo que uma pedra demorou 56 segundos a atingir o chão, espera-se que a altura do predio seja de 19,6 metros', () =>{

        //arrange 

        const tempoDaPedraCair:number = 56;
        const alturaPredioEsperada:number=19.6;

        //act
        let alturaPredio:number= calcularAlturaPredio(tempoDaPedraCair);

        //assert

        expect(alturaPredio).toBe(alturaPredioEsperada);
    }
    )
}
)