
// ex01

export function qualAlgoritmo(numero: number): number {

    let resultado: number = 1;
    let x: number;
    for (x = numero; x >= 1; x--) {
        resultado = resultado * x;
    }
    return resultado;
}
//ex02
// D-Dolar, L-Libra, I-Iene, C-Coroa sueca, F-Franco suico
export function cambio(moeda: string, valor: number): number {
    let euros: number;
    const cambioD: number = 1.534;
    const cambioL: number = 0.774;
    const cambioI: number = 161.480;
    const cambioC: number = 9.593;
    const cambioF: number = 1.601;

    if (moeda = "D") {
        euros = valor * cambioD;
    } else if (moeda = "L") {
        euros = valor * cambioL;
    } else if (moeda = "I") {
        euros = valor * cambioI;
    } else if (moeda = "C") {
        euros = valor * cambioC;
    } else if (moeda = "F") {
        euros = valor * cambioF;
    } else {
        throw new Error("Simbolo de moeda errado ");
    }
    return euros;

}

/* ex02 funcao chatgpt 
 switch 

export function cambioDiff(moeda: string, valor: number): number {
    const cambioD = 1.534;
    const cambioL = 0.774;
    const cambioI = 161.480;
    const cambioC = 9.593;
    const cambioF = 1.601;
    let euros: number;

    switch (moeda) {
        case "D":
            euros = valor * cambioD;
            break;
        case "L":
            euros = valor * cambioL;
            break;
        case "I":
            euros = valor * cambioI;
            break;
        case "C":
            euros = valor * cambioC;
            break;
        case "F":
            euros = valor * cambioF;
            break;
        default:
            throw new Error("Símbolo de moeda inválido");
    }
    return euros;
}
*/

//ex03

export function descricaoProduto(codigo: number): string {

    if (codigo ===1) {
        return "Alimento não perecível";
    } else if (codigo >= 2 && codigo <= 4) {
        return "Alimento perecível";
    } else if (codigo >= 5 && codigo <= 6) {
        return "Vestuário";
    } else if (codigo === 7) {
        return "Higiene pessoal";
    } else if (codigo >= 8 && codigo <= 15) {
        return "Limpeza e utensílios domésticos";
    } else {
        throw new Error("Código Inválido");
    }
}

//ex04

export function classificacaoQualitativa(nota:number):string {

    if(!Number.isInteger(nota)){
        throw new Error("O valor da nota tem de ser um numero inteiro");
    } else if(nota <0 || nota >20) {
        throw RangeError("O valor da nota tem de ser entre 0 e 20")
    }else if(nota >=0 && nota <=4) {
        return "mau";
    }else if(nota >=5 && nota <=9) {
        return "mediocre";
    }else if(nota >=10 && nota <=13){
        return "suficiente";
    }else if(nota >=14 && nota <=17) {
        return "bom"
    }else {
        return "muito bom";
    }
    }

    //ex05 