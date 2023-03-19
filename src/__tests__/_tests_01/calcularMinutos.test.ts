import { calcularMinutos } from "../../lab01/ex07";

describe ('Testar função calcular minutos', () => {
    test ('Tendo 10horas e 40 minutos, o resultado deve resultar num total de 640min', () => {

     // Arrange
     
     const horas:number =10;
     const minutos:number= 40;
    const totalMinutosEsperado:number= 640;
     //ACt

     let totalMinutos:number = calcularMinutos(horas, minutos);
    
    // ASSERT

    expect(totalMinutos).toBe(totalMinutosEsperado);
    
    })
})