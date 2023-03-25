
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

    if (codigo === 1) {
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

export function classificacaoQualitativa(nota: number): string {

    if (!Number.isInteger(nota)) {
        throw new Error("O valor da nota tem de ser um numero inteiro");
    } else if (nota < 0 || nota > 20) {
        throw RangeError("O valor da nota tem de ser entre 0 e 20")
    } else if (nota >= 0 && nota <= 4) {
        return "mau";
    } else if (nota >= 5 && nota <= 9) {
        return "mediocre";
    } else if (nota >= 10 && nota <= 13) {
        return "suficiente";
    } else if (nota >= 14 && nota <= 17) {
        return "bom"
    } else {
        return "muito bom";
    }
}

//ex05 

export function retencaoSalarial(salario: number): number {

    let salarioLiquido: number;

    if (salario < 0) {
        throw new RangeError("O salario tem de ser maior que 0");
    } else if (salario <= 500) {
        salarioLiquido = salario - (salario * 0.1);
    } else if (salario > 500 && salario <= 1000) {
        salarioLiquido = salario - (salario * 0.15);
    } else {
        salarioLiquido = salario - (salario * 0.2);
    }

    return salarioLiquido;
}

//ex07 a)

export function somaPares(numeros: number[]): number {

    let soma: number = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            soma = soma + numeros[i];    // soma += numeros[i]
        }
    }
    return soma;
}

//ex07 b)

export function contaPares(numeros: number[]): number {

    let contagem: number = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            contagem++;
        }
    }
    return contagem;
}

//ex07 c)

export function somaImpares(numeros: number[]): number {

    let soma: number = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 != 0) {
            soma += numeros[i]; // soma = soma + numeros[i]
        }
    }
    return soma;
}


//ex07 d)

export function contaImpares(numeros: number[]): number {

    let contagem: number = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 != 0) {   // !n operador relacional diferente de
            contagem++;
        }
    }
    return contagem;
}

// ex07 e)

export function somaMultiplos(multiplo: number, inicioIntervalo: number, fimIntervalo: number): number {

    const min = Math.min(inicioIntervalo, fimIntervalo);
    const max = Math.max(inicioIntervalo, fimIntervalo);                   //const [min, max] = [Math.min(inicioIntervalo, fimIntervalo), Math.max(inicioIntervalo,fimIntervalo)];  este metodo cria um array e ordena os valores pela respetiva ordem, e de seguida desestrutura o array em duas constantes distintas c/ o valor min e max. 

    let soma: number = 0;

    for (let i = min; i <= max; i++) {
        if (i % multiplo === 0) {
            soma += i;  // soma= soma+ i; 
        }
    }
    return soma;
}

//ex07 f)

export function produtoMultiplos(multiplo: number, intervalo: number[]): number {

    let produto: number = 1;

    for (let i = 0; i < intervalo.length; i++) {
        if (intervalo[i] % multiplo === 0) {
            produto *= intervalo[i];  // produto= produto+ i; 
        }
    }
    return produto;
}

//ex07 g)

export function mediaMultiplos(multiplo: number, inicioIntervalo: number, fimIntervalo: number): number {

    const min = Math.min(inicioIntervalo, fimIntervalo);
    const max = Math.max(inicioIntervalo, fimIntervalo);                   //const [min, max] = [Math.min(inicioIntervalo, fimIntervalo), Math.max(inicioIntervalo,fimIntervalo)];  este metodo cria um array e ordena os valores pela respetiva ordem, e de seguida desestrutura o array em duas constantes distintas c/ o valor min e max. 

    let soma: number = 0;
    let contagem: number = 0;
    let media: number;


    for (let i = min; i <= max; i++) {
        if (i % multiplo === 0) {
            soma = soma + i;
            contagem++;
        }
    }
    media = soma / contagem;
    return media;
}