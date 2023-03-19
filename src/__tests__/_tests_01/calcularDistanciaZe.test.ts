import { calcularDistanciaZe } from "../../lab01/ex09";

describe ('Testar função calcular a distancia percorrida pelo Ze até desistir.', () => {
    test ('Sabendo que o Manuel percorreu 51263 metros em 7521 segundos e o Zé correu 3841 segundos até desistir, espera-se que o resultado demonstre que o Zé percorreu 27km até desistir', () => {

    
    
    
    //arrange 

    const distanciaManuel:number= 51263;
    const intervaloTempoManuel:number= 7521; 
    const intervaloTempoZe:number= 3841;
    const distanciaKmZePercorreuEsperada:number= 27;
    
    // act

    let distanciaKmZeTotal:number = calcularDistanciaZe(distanciaManuel,intervaloTempoManuel,intervaloTempoZe);
    
    //assert

    expect(distanciaKmZeTotal).toBe(distanciaKmZePercorreuEsperada);
    
})
})