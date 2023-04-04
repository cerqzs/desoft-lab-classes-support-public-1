
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

    if (moeda == "D") {
        euros = Math.trunc(valor * cambioD);
    } else if (moeda == "L") {
        euros = Math.trunc(valor * cambioL);
    } else if (moeda == "I") {
        euros = Math.trunc(valor * cambioI);
    } else if (moeda == "C") {
        euros = Math.trunc( valor * cambioC);
    } else if (moeda == "F") {
        euros = Math.trunc( valor * cambioF);
    } else {
        throw new Error("Simbolo de moeda errado");
    }
    return euros;

}

/* ex02 funcao 
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

    if (salario <= 0) {
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

//ex06 a)

export function multiplosDeTres(intervalo: number[]): number {

    const multiplo: number = 3;
    let contagem: number = 0;
    for (let i = 0; i < intervalo.length; i++) {
        if (intervalo[i] % multiplo === 0) {
            contagem++;
        }
    }
    return contagem;
}

//ex06 B)

export function multiplosNumeroInteiro(multiplo: number, intervalo: number[]): number {

    let contagem: number = 0;

    if (Number.isInteger(multiplo)) {
        for (let i = 0; i < intervalo.length; i++) {
            if (intervalo[i] % multiplo === 0) {
                contagem++;
            }
        }
    } else {
        throw new Error("O numero deve ser inteiro");
    }
    return contagem;
}

//ex 06C)

export function multiplosTresCinco(intervalo: number[]): number {
    
    const multiploCinco: number = 5;
    let contagem: number = 0;

    for (let i = 0; i < intervalo.length; i++) {
        if (intervalo[i] % multiploCinco === 0) {
            contagem++;
        }
    }
    contagem = contagem + multiplosDeTres(intervalo)
    return contagem;
}

// ex06D)

export function multiplosDoisNumInteiros(multiploX: number, multiploY: number, intervalo: number[]): number {

    let contagem: number = 0;

    if (Number.isInteger(multiploX,) && Number.isInteger(multiploY)) {
        for (let i = 0; i < intervalo.length; i++) {
            if (intervalo[i] % multiploX === 0 || intervalo[i] % multiploY === 0) {
                contagem++;
            }
        }
    } else {
        throw new Error("Os dois numeros devem ser inteiros")
    }
    return contagem;
}

//ex06E)

export function somaMultiplosDoisNumInteiros(multiploX: number, multiploY: number, intervalo: number[]): number {

    let soma: number = 0;

    if (Number.isInteger(multiploX,) && Number.isInteger(multiploY)) {
        for (let i = 0; i < intervalo.length; i++) {
            if (intervalo[i] % multiploX === 0 && intervalo[i] % multiploY === 0) {
                soma += intervalo[i];
            }
        }
    } else {
        throw new Error("Os dois numeros devem ser inteiros")
    }
    return soma;
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
            soma += i; // soma=soma +i
            contagem++;
        }
    }
    media = soma / contagem;
    return media;
}

// ex07H

export function mediaMultiplosDoisValores(multiploX: number, multiploY: number, inicioIntervalo: number, fimIntervalo: number,): number {

    const min = Math.min(inicioIntervalo, fimIntervalo);
    const max = Math.max(inicioIntervalo, fimIntervalo);

    let soma: number = 0;
    let contagem: number = 0;
    let media: number;

    for (let i = min; i <= max; i++) {
        if (i % multiploX === 0 || i % multiploY === 0) {
            soma += i;  // soma =soma +i
            contagem++;
        }
    }
    media = soma / contagem;
    return media;
}

//8A

export function numeroAlgarismosNumInt(numero: number): number {

    return numero.toString().length;
}

//8B

export function contaAlgarismosPares(numero: number): number {

    let contagem = 0;

    const algarismos = numero.toString().split('');    // converte o numero numa string. divide a string em caracteres individuais

    if (Number.isInteger(numero)) {
        for (let i = 0; i < algarismos.length; i++) {
            if (parseInt(algarismos[i]) % 2 === 0) {   // converte os caracteres em numeros inteiros.
                contagem++;
            }
        }
    } else {
        throw new Error("O numero deve ser inteiro")
    }
    return contagem;
}

//exc 8C

export function contaAlgarismosImpares(numero: number): number {

    let contagem = 0;

    const algarismos = numero.toString().split('');    // converte o numero numa string. divide a string em caracteres individuais

    if (Number.isInteger(numero)) {
        for (let i = 0; i < algarismos.length; i++) {
            if (parseInt(algarismos[i]) % 2 != 0) {   // converte os caracteres em numeros inteiros.  // !n operador relacional diferente de
                contagem++;
            }
        }
    } else {
        throw new Error("O numero deve ser inteiro")
    }
    return contagem;

}

// ex08D 

export function somaAlgarismosNumInt(numero: number): number {

    let soma = 0;

    const algarismos = numero.toString().split('');    // converte o numero numa string. divide a string em caracteres individuais

    if (Number.isInteger(numero)) {
        for (let i = 0; i < algarismos.length; i++) {
            soma += parseInt(algarismos[i])            // converte os caracteres em numeros inteiros.  
        }
    } else {
        throw new Error("O numero deve ser inteiro")
    }
    return soma;
}

// ex08E

export function somaAlgarismosPares(numero: number): number {

    let soma: number = 0;

    const algarismos = numero.toString().split('');    // converte o numero numa string. divide a string em caracteres individuais

    if (Number.isInteger(numero)) {
        for (let i = 0; i < algarismos.length; i++) {
            if (parseInt(algarismos[i]) % 2 === 0) {   // converte os caracteres em numeros inteiros.  // 
                soma += parseInt(algarismos[i]);
            }
        }
    } else {
        throw new Error("O numero deve ser inteiro")
    }
    return soma;
}

//ex08F

export function somaAlgarismosImpares(numero: number): number {

    let soma: number = 0;

    const algarismos = numero.toString().split('');    // converte o numero numa string. divide a string em caracteres individuais

    if (Number.isInteger(numero)) {
        for (let i = 0; i < algarismos.length; i++) {
            if (parseInt(algarismos[i]) % 2 != 0) {   // converte os caracteres em numeros inteiros.  // 
                soma += parseInt(algarismos[i]);
            }
        }
    } else {
        throw new Error("O numero deve ser inteiro")
    }
    return soma;
}

//ex08G 

export function mediaAlgarismosNumInt(numero: number): number {

    let soma: number = 0;
    let media: number;

    const algarismos = numero.toString().split('');    // converte o numero numa string. divide a string em caracteres individuais

    if (Number.isInteger(numero)) {
        for (let i = 0; i < algarismos.length; i++) {
            soma += parseInt(algarismos[i]);            // converte os caracteres em numeros inteiros.  // 
        }
    } else {
        throw new Error("O numero deve ser inteiro")
    }
    media = soma / algarismos.length;

    return media;
}

//ex08H

export function mediaAlgarismosPares(numero: number): number {

    let soma: number = 0;
    let contagem: number = 0;
    let media: number = 0;

    const algarismos = numero.toString().split('');    // converte o numero numa string. divide a string em caracteres individuais

    if (Number.isInteger(numero)) {
        for (let i = 0; i < algarismos.length; i++) {
            if (parseInt(algarismos[i]) % 2 === 0) {   // converte os caracteres em numeros inteiros.  // 
                soma += parseInt(algarismos[i]);
                contagem++;
            }
        }
    } else {
        throw new Error("O numero deve ser inteiro")
    }
    media = soma / contagem;

    return media;
}

//ex08I 

export function mediaAlgarismosImpares(numero: number): number {

    let soma: number = 0;
    let contagem: number = 0;
    let media: number = 0;
    const algarismos = numero.toString().split('');    // converte o numero numa string. divide a string em caracteres individuais

    if (Number.isInteger(numero)) {
        for (let i = 0; i < algarismos.length; i++) {
            if (parseInt(algarismos[i]) % 2 != 0) {   // converte os caracteres em numeros inteiros.  // 
                soma += parseInt(algarismos[i]);
                contagem++;
            }
        }
    } else {
        throw new Error("O numero deve ser inteiro")
    }
    media = soma / contagem;

    return media;
}

// ex08J

export function numeroInteiroInvertido(numero: number): number {

    let numeroInvertido: number;

    if (Number.isInteger(numero)) {
        numeroInvertido = parseInt(numero.toString().split('').reverse().join('')) * Math.sign(numero);   // converte para string | converte a string para um array | inverte a ordem dos items | devolve o inverso do numero para uma string ||multiplica o numero pelo sinal original para manter o valor do numero || converte a string em um numero
        return numeroInvertido
    } else {
        throw new Error("O numero deve ser inteiro")
    }
}

// ex09A


export function verificarCapicua(numero: number): boolean {

    let numeroInvertido: number;
    numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));
    return numero === numeroInvertido;

}

/*export function verificarCapicua(valor: number): boolean {
    if (valor < 0) {
        return false;
    }
    let numero = valor;
    let inverso: number = 0;

    while (numero > 0) {  // The while loop is another type of loop that checks for a specified condition before beginning to execute the block of statements. The loop runs until the condition value is met
        const ultimoDigito = numero % 10; // descobrir o ultimo digito da variavel  numero
        inverso = inverso * 10 + ultimoDigito; // cada ciclo acrescenta um digito à variavel inverso, que será o numero inverso de valor
        numero = Math.floor(numero / 10); // remove o ultimo digito da variavel numero e prepara o ciclo para a proxima interação 
    }
    return valor === inverso;
} */

//ex09B

export function verificarArmStrong(numero: number): boolean {

    let soma: number = 0;
    let numeroOriginal: number = numero;

    while (numeroOriginal > 0) {
        const digito: number = numeroOriginal % 10; // descobrir o ultimo digito da variavel
        soma += digito ** 3;                        // calculo da soma dos cubos
        numeroOriginal = Math.floor(numeroOriginal / 10); // remove o ultimo digito da variavel numero e prepara o ciclo para a proxima interação
    }

    return soma === numero;
}


//ex09C


export function primeiraCapicua(inicioIntervalo: number, fimIntervalo: number): number {

    for (let numero = inicioIntervalo; numero <= fimIntervalo; numero++) {
        if (verificarCapicua(numero)) {
            return numero;
        }
    }
    throw new Error("nao existem capicuas no intervalo")
}

//ex09 D
export function maiorCapicua(inicioIntervalo: number, fimIntervalo: number): number {

    let capicuaMaior: number = 0;

    for (let i = inicioIntervalo; i <= fimIntervalo; i++) {
        if (verificarCapicua(i)) {
            if (i > capicuaMaior) {
                capicuaMaior = i;
            }
        }
    }
    return capicuaMaior;
}

//ex09 E 

export function contarCapicuas(inicioIntervalo: number, fimIntervalo: number): number {

    let contagem: number = 0;

    for (let i = inicioIntervalo; i <= fimIntervalo; i++) {
        if (verificarCapicua(i)) {
            contagem++;
        }
    }
    return contagem;
}


// ex09F

export function retornarArmstrong(inicioIntervalo: number, fimIntervalo: number): number {

    for (let i = inicioIntervalo; i <= fimIntervalo; i++) {
        if (verificarArmStrong(i)) {
            return i;
        }
    }
    throw new RangeError("Não existem numeros armstrong no intervalo");
}

//ex09G 

export function contarArmstrong(inicioIntervalo: number, fimIntervalo: number): number {

    let contagem: number = 0;

    for (let i = inicioIntervalo; i <= fimIntervalo; i++) {
        if (verificarArmStrong(i)) {
            contagem++;
        }
    }
    return contagem;
}

//ex 10 

export function calculoVencimento(horasExtra: number, salario: number): number {

    let valorHorasExtra = salario * 0.02;
    let salarioMensal: number;
    return salarioMensal = salario + (horasExtra * valorHorasExtra);
}

// ex 11 

export function posicaoProdutoAcumulado(lista: number[], numero: number): number {

    let posicao: number = 0;
    let produtoAcumulado: number = 1;
    let limite = numero;

    for (let i = 0; i < lista.length; i++) {
        produtoAcumulado *= lista[i];

        if (produtoAcumulado > limite) {
            return posicao;
        }
        posicao++;
    }

    return -1;
}

//ex 12

export function classificacaoNumeros(numero: number): number {

    let soma: number = 0;

    for (let i = 0; i < numero; i++) {
        if (numero % i === 0) {
            soma += i;
        }
    }
    if (soma === numero) {
        return 0;
    } else if (soma > numero) {
        return 1;
    } else {
        return -1;
    }
}

//ex 13 

export function obterNumero(numero: number): number {
    let contagem: number = 0;
    let inicioIntervalo: number = 0;
    let fimIntervalo: number = 10;
    const limite: number = 1;
    const limiteFim: number = 20;

    if (numero < limite || numero > limiteFim) {
        throw new RangeError(" O numero deve ser entre 1 e 20")
    }
    for (let i = inicioIntervalo; i <= fimIntervalo; i++) {
        for (let x = i; x <=fimIntervalo; x++) {
            if (numero === i + x) {
                contagem++;
            }
        }
    }
    return contagem;
}

//ex 14 a)

export function canicultura(pesoAnimalKg: number, racaoGramas: number): number {

    if (pesoAnimalKg <= 10 && racaoGramas === 100 || pesoAnimalKg > 10 && pesoAnimalKg <= 25 && racaoGramas === 250 || pesoAnimalKg < 25 && pesoAnimalKg <= 45 && racaoGramas === 300 || pesoAnimalKg > 45 && racaoGramas === 500) {
        return 0;
    } else if (pesoAnimalKg <= 10 && racaoGramas > 100 || pesoAnimalKg > 10 && pesoAnimalKg <= 25 && racaoGramas > 250 || pesoAnimalKg < 25 && pesoAnimalKg <= 45 && racaoGramas > 300 || pesoAnimalKg > 45 && racaoGramas > 500) {
        return 1;
    } else {
        return -1;
    }
}

//ex 14 b)

export function caniculturaB(pesos: number[], racoes: number[]): number[] {
    const resultado: number[] = [];
    for (let i = 0; i < pesos.length; i++) {
        const peso = pesos[i];
        const racao = racoes[i];
        if (peso < 0) {
            throw new Error("O peso do cão não pode ser negativo");
        }
        let racaoAdequada: number;
        if (peso <= 10) {
            racaoAdequada = 100;
        } else if (peso > 10 && peso <= 25) {
            racaoAdequada = 250;
        } else if (peso > 25 && peso <= 45) {
            racaoAdequada = 300;
        } else {
            racaoAdequada = 500;
        }
        if (racao === racaoAdequada) {
            resultado.push(0);
        } else if (racao > racaoAdequada) {
            resultado.push(1);
        } else {
            resultado.push(-1);
        }
    }
    return resultado;
}

// ex15

export function checksumNumero(numero: string): boolean {

    if (numero.length > 8) {
        return false;
    }
    const num = numero.split('').map(Number);
    const ultimoAlgarismo = num[num.length - 1]; // length = 8 - ultimo digito é o 7 pq indice começa a contar no 0
    num.push(ultimoAlgarismo);  // adiciona o ultimo algarismo novamente ao numero, passamos a ter 9 digitos

    let somaPonderada: number = 0;

    for (let i = 0; i < num.length; i++) {
        somaPonderada += num[i] * (num.length - i); // primeira interação do loop multiplica o 1º algarismo por 9, e assim sucessivamente
    }
    return somaPonderada % 11 === 0;
}

//ex16 

export function separacaoParesImpares(sequencia: number[]): number[] {

    let numerosPares: number[] = [];
    let numerosImpares: number[] = [];

    for (let i = 0; i < sequencia.length; i++) {
        if (sequencia[i] % 2 === 0) {
            numerosPares.push(sequencia[i]);
        } else {
            numerosImpares.push(sequencia[i])
        }
    }
    numerosPares.sort();
    numerosImpares.sort();
    return numerosImpares.concat(numerosPares);

}


