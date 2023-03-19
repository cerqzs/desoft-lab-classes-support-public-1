import { calcularHipotenusa } from "../../lab01/ex05";

describe('testar função calcular Hipotenusa', () => {
    test (' o cateto1 com valor 10 e cateto2 com valor 15 deve dar hipotenusa = 325 ', () => {

        //Arrange 

        const cateto1:number = 10;
        const cateto2:number =15;
        const hipotenusaEsperada: number = 325;

        //Act

        let hipotenusa:number = calcularHipotenusa (cateto1, cateto2);

        //Assert 

        expect(hipotenusa).toBe(hipotenusaEsperada);
    })
})