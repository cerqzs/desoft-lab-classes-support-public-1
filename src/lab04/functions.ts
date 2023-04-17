// ex1 

import { numeroAlgarismosNumInt, verificarCapicua } from "../lab03/functionslab3";

export function countDigitsNumber(num: number): number {

    return num = numeroAlgarismosNumInt(num)
}

//ex 02

export function turnNumIntoArray(num: number): number[] {

    const arrayConversion = num.toString().split('').map(num => parseInt(num)); // converter para string | divide a string em caracteres individuais | map percorre cada caractere do array e converte em um numero inteiro usando o parseint
    return arrayConversion;
}

// ex03 

export function sumArrayElements(num: number[]): number {

    let sum: number = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}

//ex 4
export function returnEvenArrayElements(num: number[]): number[] {

    let evenArray: number[] = [];

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            evenArray.push(num[i]);
        }
    }
    return evenArray;
}

//ex 5

export function returnOddArrayElements(num: number[]): number[] {

    let evenArray: number[] = [];

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 != 0) {
            evenArray.push(num[i]);
        }
    }
    return evenArray;
}

//ex 6 

export function sumDigitPair(num: number): number {

    let sum: number = 0;
    let digitConversion = num.toString().split('');

    for (let i = 0; i < digitConversion.length; i++) {
        if (parseInt(digitConversion[i]) % 2 == 0) {
            sum += parseInt(digitConversion[i]);
        }
    }
    return sum;
}

// ex 7 

export function sumDigitOdd(num: number): number {
    let sum: number = 0;
    let digitConversion = num.toString().split('');

    for (let i = 0; i < digitConversion.length; i++) {
        if (parseInt(digitConversion[i]) % 2 != 0) {
            sum += parseInt(digitConversion[i]);
        }
    }
    return sum;
}

// ex8 

export function firstNumElementsArray(array: number[], num: number): number[] {

    return array.slice(0, num);  // indice inicial | indice final

}

//ex 9 

export function multiplesThreeInInterval(begin: number, end: number): number[] {

    const multiple: number = 3;
    let multipleArray: number[] = [];

    for (let i = begin; i < end; i++) {
        if (i % multiple == 0) {
            multipleArray.push(i)
        }
    }
    return multipleArray
}

// ex10 

export function multiplesInInterval(begin: number, end: number, multiple: number): number[] {
    let multipleArray: number[] = [];

    for (let i = begin; i < end; i++) {
        if (i % multiple == 0) {
            multipleArray.push(i)
        }
    }
    return multipleArray
}

// ex11 

export function multiplesInCommon(start: number, end: number, numbers: number[]): number[] {

    const commonMultiples: number[] = [];
    for (let i = start; i <= end; i++) {
        let isCommonMultiple = true;
        for (let j = 0; j < numbers.length; j++) {
            if (i % numbers[j] !== 0) {
                isCommonMultiple = false;
                break;
            }
        }
        if (isCommonMultiple) {
            commonMultiples.push(i);
        }
    }
    return commonMultiples;
}

//ex 12 

export function checkCapicua(num: number): boolean {
    let check = verificarCapicua(num);
    return check;
}

//ex 13A 

export function smallValueArray(array: number[]): number {

    let small: number = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < small) {
            small = array[i];
        }
    }
    return small;
}

// ex 13B

export function biggestValueArray(array: number[]): number {

    let big: number = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > big) {
            big = array[i];
        }
    }
    return big;
}

//13C

export function averageArrayElements(array: number[]): number {

    let count: number = 0;
    let average: number;
    let sum: number = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        count++;
    }
    return average = Math.trunc(sum / count)
}
//13D
export function productArrayElements(array: number[]): number {

    let product: number = 1;

    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product
}
//13 E


//13 F





