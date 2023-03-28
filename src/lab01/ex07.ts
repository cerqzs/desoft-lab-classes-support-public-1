/* Inicio
	ED: H, M, MT INTEIROS
	LER (H, M) 
	MT <- H * 60 + M
	ESCREVER ( “ Passaram “, MT “ minutos”)
*/

export function calcularMinutos(horas: number, minutos: number): number {
	let totalMinutos: number;
	totalMinutos = horas * 60 + minutos;
	return totalMinutos
}

let min: number;
min = calcularMinutos(5, 20);
//console.log (" Passaram," +min)

// (-15,-20);
// (15,-20);
//(-15,20);
// (0,0);
// (0,25);
//(25,2);
//(1,0);
