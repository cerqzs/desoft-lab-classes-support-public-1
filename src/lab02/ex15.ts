import { calculoGastos, calculoTempo } from "./functions";

let gastosTotal: number;
let tempoTotal: number;
let conversaoEurosTempo:number = 10;

tempoTotal = calculoTempo(20,10,12);
gastosTotal= calculoGastos(20,10,12) + (calculoTempo(20,10,12) *conversaoEurosTempo); 


console.log("o valor total do serviço é de ", gastosTotal, "€ e tem um tempo estimado de", tempoTotal, "horas");



