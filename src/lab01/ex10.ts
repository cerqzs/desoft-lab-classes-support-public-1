/* Inicio
ED: x, resultado REAL
ESCREVER (“Indique o valor de x”)
LER (x)

resultado &lt;- x^2- 3*x + 1
ESCREVER (“ o valor da expressão é “ resultado”)
FIM 
*/ 

export function calcularX (valorX: number) :number {
    let result: number;
    result = valorX **2 - 3* valorX +1
    return result
}

let valorExpressao:number; 
valorExpressao = calcularX (2);
//console.log (" o valor da expressão é de" +valorExpressao)