/* INICIO
ED: cabo1, cabo2, distancia, angulo1
cabo1 &lt;- 40
cabo2 &lt;- 60
angulo1 &lt;- 0,5
distancia &lt;- sqrt (cabo2^2 + cabo1^2 – 2* cabo1 * cabo2 * 0,5)
ESCREVER (“ A distancia entre os dois operários é de “ distancia “ metros” )
FIM */ 

export function calcularDistanciaOperarios ( cabo1: number, cabo2:number, angulo1:number): number {
    let dist: number; 
    dist= Math.round(Math.sqrt (cabo2**2 + cabo1**2 - 2* cabo1 * cabo2 * angulo1)); 
    return dist 
} 

let distanciaoperarios: number; 
distanciaoperarios = calcularDistanciaOperarios (40, 60 , 0.5);
console.log ("a distancia entre os operarios é de:"  +distanciaoperarios);
