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
export function uniqueElementsArray(numbers: number[]): number[] {

    const unrepeatedValues: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        let count = 0;

        // Check if this number appears more than once in the array
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                count++;
            }
        }
        // If this number only appears once in the array, add it to the list of unrepeated values
        if (count === 1) {
            unrepeatedValues.push(numbers[i]);
        }
    }
    return unrepeatedValues;
}

//13 F

export function inverseArray(array: number[]): number[] {

    return array.reverse();
}

//13 g) os elementos primos desse array

export function returnPrimeNumbers(array: number[]): number[] {
    let primeNumbers: number[] = [];

    for (let i = 0; i < array.length; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (array[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && array[i] > 1) {
            primeNumbers.push(array[i]);
        }
    }
    return primeNumbers;
}

// Exercício 14: Número de Colunas= nr linhas em Matriz (**)

export function numberOfColunsMatrix(matrix: number[][]): number {

    const numColuns = matrix[0].length;
    for (let i = 1; i < matrix.length; i++) {  // nr linhas
        if (matrix[i].length !== numColuns) { // nr colunas
            return -1
        }
    }
    return numColuns;
}

// ex15 Construa uma solução que verifica se uma dada matriz é quadrada.

export function squareMatrix(matrix: number[][]): boolean {
    const numColuns = matrix[0].length;
    const numLines = matrix.length;
    return numColuns === numLines;
}

// ex16 Construa uma solução que verifica se uma dada matriz é retangular.

export function rectangularMatrix(matrix: number[][]): boolean {
    const numColuns = matrix[0].length;
    const numLines = matrix.length;
    return numColuns !== numLines;
}

//ex17 a) o elemento de menor valor;

export function smallestValueMatrix(matrix: number[][]): number | undefined {

    let minValue = undefined;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (minValue === undefined || matrix[i][j] < minValue) {
                minValue = matrix[i][j];
            }
        }
    }
    return minValue;
}

//ex17 b) o elemento de maior valor;

export function biggestValueMatrix(matrix: number[][]): number | undefined { // significa que a função smallestValueMatrix pode retornar um valor numérico (number) ou undefined.

    let biggestValue = undefined;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (biggestValue === undefined || matrix[i][j] > biggestValue) {
                biggestValue = matrix[i][j];
            }
        }
    }
    return biggestValue;
}

// ex 17 c)o valor médio dos elementos;

export function averageValuesMatrix(matrix: number[][]): number {
    let sum1: number = 0;
    let count: number = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum1 += matrix[i][j];
            count++;
        }
    }
    if (count === 0) {
        return -1;
    }
    return Math.trunc(sum1 / count);
}

// 17D o produto dos seus elementos; (***)


export function productValuesMatrix(matrix: number[][]): number {

    let product: number = 1;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            product *= matrix[i][j];

        }
    }
    return product;
}

// 17 e) o conjunto de elementos não repetidos; (***)

export function uniqueElementsInMatrix(matrix: number[][]): number[] {
    const unrepeatedValues: number[] = [];
  
    const elementCount: {[key: number]: number} = {}; // Cria um objeto para armazenar a contagem de cada elemento na matriz
  
    for (let i = 0; i < matrix.length; i++) { // Itera sobre cada elemento da matriz e incrementa a contagem de cada elemento
      for (let j = 0; j < matrix[i].length; j++) {
        const element = matrix[i][j];
        if (element in elementCount) { // verifica se o o elemento ja existe no objeto
          elementCount[element]++; // se sim acrescenta a contagem em 1
        } else {
          elementCount[element] = 1;// se nao adiciona o elemento com contagem 1
        }
      }
    }
    for (let i = 0; i < matrix.length; i++) {  // Itera sobre cada elemento na matriz e adiciona apenas os elementos com contagem 1
      for (let j = 0; j < matrix[i].length; j++) {
        const element = matrix[i][j];
        if (elementCount[element] === 1) {
          unrepeatedValues.push(element);
        }
      }
    } 
    return unrepeatedValues;
  }