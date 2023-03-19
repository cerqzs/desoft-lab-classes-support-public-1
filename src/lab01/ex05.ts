
export function calcularHipotenusa (cateto1: number, cateto2: number) : number {
    let hipotenusa: number;
    hipotenusa = cateto1 **2 + cateto2 **2
    return hipotenusa
}

let hipo: number;
hipo = calcularHipotenusa (3, 3);
console.log (" O valor da hipotenusa é de" +hipo)

