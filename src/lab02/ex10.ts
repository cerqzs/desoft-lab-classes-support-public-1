import { multiplosCheck, imprimeMensagemMultiplos } from "./functions";

let x:number = 6;
let y:number= 13;

if (multiplosCheck(x, y)) {
    console.log(imprimeMensagemMultiplos(x,y));
} else {
    console.log(x,'não é multiplo nem divisor de ', y);
}
