/* Exc12

INICIO
ED: alturaE, sombraE, alturaP, sombraP INTEIRO
ESCREVER (“introduza a altura da pessoa em metros”)
LER (alturaP)
ESCREVER (“introduza o tamanho da sombra da pessoa em metros”)
LER (sombraP)
ESCREVER (“introduza o tamanho da sombra do edifício em metros”)

alturaE &lt;- sombraE / sombraP * alturaP

ESCREVER */ 

export function calcularAlturaEdificio ( sombraEdifico:number, alturaPessoa:number , sombraPessoa:number ) :number {
    let alturaEdi: number; 
    alturaEdi = Math.round(sombraEdifico / sombraPessoa * alturaPessoa);
    return alturaEdi 
}

let edificio:number; 
edificio = calcularAlturaEdificio (40, 2, 3);
//console.log (" o tamanho do edifico é de: " +edificio)