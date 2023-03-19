/*Inicio

ED: intervalotempo, distancia INTEIRO
ESCREVER (“Qual o intervalo de tempo em segundos, entre o relâmpago e o trovão?”)
LER (intervalotempo)
distancia &lt;- intervalotempo * 340
ESCREVER (“a trovoada está a”, distancia “metros”)
FIM */ 

export function calcularIntervaloTempo (intervaloT:number) : number {
    let distancia: number;
    distancia = intervaloT * 340 ; 
    return distancia
}

let trovoada: number; 
trovoada = calcularIntervaloTempo (10);
console.log ("a trovoada está a:"   +trovoada)