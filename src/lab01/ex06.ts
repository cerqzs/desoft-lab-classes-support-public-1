export function calcularTemperaturaFahrenheit ( celsius: number): number {
    let fabre: number;
    fabre = Math.round( 32 + (9/5) * celsius);
    return fabre
}

let temp : number; 
temp = calcularTemperaturaFahrenheit (10);
console.log ("A temperatura em graus Fahrenheit é de" +temp)