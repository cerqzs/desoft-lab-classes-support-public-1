export function calcularLitros (pi:number, raio: number, altura: number, conversao:number): number {
    let totalLitros: number; 
    totalLitros = pi * raio **2 * altura;
    totalLitros = totalLitros * conversao
    return totalLitros
}

let z: number;
z= calcularLitros (3.14, 2, 4, 1000);
// console.log ("O total de litros possível de armazenar é"  +z)