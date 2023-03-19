import { calcularIntervaloTempo } from "../../lab01/ex08";

describe ('Testar função calcular Intervalo de Tempo', () => {
    test ('Tendo o intervalor de tempo em segundos de 450 entre o trovão e o relampago, deve resultar que a trovoada esta a uma distancia de 115 600 metros', () => {

    // Arrange

    const intervaloTempo:number = 340;
    const distanciaEmMetrosEsperada:number= 115600;
    
    
    // act

    let distanciaMetros:number= calcularIntervaloTempo(intervaloTempo);

    // assert

    expect(distanciaMetros).toBe(distanciaEmMetrosEsperada);
    }  
    )

}
)