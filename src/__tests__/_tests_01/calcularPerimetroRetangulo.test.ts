import { calcularPerimetroRetangulo } from "../../lab01/ex04";
describe('testar função calcular Perimetro Retangulo', () => {
    test (' A area de 10 e a base de 15 deve dar um perimetro de 50 ', () => {
        
        //Arrange

        const area:number =10; 
        const base:number=15;
        const perimetroEsperado:number=50;
        // Act    
        let perimetro:number  = calcularPerimetroRetangulo(area, base);
        
        //ASSert
        
        expect(perimetro).toBe(perimetroEsperado);

    })
    })