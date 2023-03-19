/* Inicio
ED: distanciaze, deslocamentoM, intervaloTempoM, intervaloTempoZe distanciaM Inteiro
velocidadeM REAL
ESCREVER (“Insira a distancia em metros que o Manuel percorreu”)
LER (distanciaM)
ESCREVER (“Indique em segundos quanto tempo o Manuel demorou a completar a
prova”
LER (intervaloTempoM)
ESCREVER (“ Indique em segundos quanto tempo o Zé correu até desistir”
LER (intervaloTempoZe)
velocidadeM &lt;- distanciaM / intervaloTempoM
velocidadeM &lt;- ROUND(velocidadeM;-2)
distanciaze &lt;- velocidadeM * intervaloTempoZe / 1000
ESCREVER (“ O zé Percorreu, “ distanciaze “ Km até desistir”)
FIM */ 

export function calcularDistanciaZe ( distanciaM:number , intervaloTempoM:number , intervaloTempoZ:number ) : number {
    let velocidadeM :number ;
    let distanciaZe: number; 
    velocidadeM =  Math.round(distanciaM / intervaloTempoM); 
    distanciaZe = Math.round(velocidadeM * intervaloTempoZ /1000);
    return distanciaZe
}

let kmPercorridoZe: number; 
kmPercorridoZe = calcularDistanciaZe (42300, 500, 92);
console.log (" o zé percorreu:" +kmPercorridoZe);