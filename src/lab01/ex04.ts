export function calcularPerimetroRetangulo (area:number , base:number) : number {
    let perimetro: number; 
    perimetro = 2 * area + 2 * base;
    return perimetro
}

let peri: number;
peri = calcularPerimetroRetangulo (10 , 5);
// console.log ("o perímetro do retangulo é de" +peri)