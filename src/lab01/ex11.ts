/* 
ED: altura REAL
tempo INTEIRO
ESCREVER (“Indique em segundos o tempo cronometrado que a pedro demorou a
atingir o chão”
LER (tempo)
altura &lt;- 0*tempo + (9,8*2^2)/2
ESCREVER (“A altura do prédio é de “altura “metros”)
FIM */ 

export function calcularAlturaPredio (tempo:number) :number {
    let alturaEdificio: number;
    alturaEdificio = 0 * tempo + (9.8 *2**2)/2;
    return alturaEdificio
}

let predio: number;
predio = calcularAlturaPredio (25);
//console.log (" a altura do prédio é de" +predio)