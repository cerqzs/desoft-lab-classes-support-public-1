import { contaImpares, contaPares, somaImpares, somaPares, verificarArmStrong } from "../lab03/functionslab3";
import { averageArrayElements, biggestValueArray, checkCapicua, multiplesInInterval, smallValueArray } from "../lab04/functions";


// 1 a) Construtor público em que o array encapsulado fica vazio (i.e. sem valores). (*)

export class ArrayIntA {
    //fields
    public values: number[];
    //constructor 
    constructor() {
        this.values = []
    }
}

// a partir do 1B

export class ArrayIntD {
    //fields
    public values: number[];

    //constructor 
    //2 b) Construtor público que permita inicializar o array encapsulado com alguns valores. (**)
    constructor(...values: number[]) {
        this.values = values;
    }
    // functions

    //c) Adicione um novo elemento (valor) ao array encapsulado. (*)
    addValue(value: number): number[] {
        this.values.push(value);

        return this.values;
    }

    // d) Retire o primeiro elemento do array encapsulado com um determinado valor. (*
    removeValue(): number | undefined {
        let removedValue = this.values.shift();
        return removedValue;
    }
    // e) Retorne o valor de um determinado elemento indicado pela sua posição. (*)
    getValueAtIndex(index: number): number {
        if (index < 0 || index >= this.values.length) {
            throw new Error("Index out of bounds");
        }
        return this.values[index];
    }
    // f) Retorne o número de elementos no array. (*)
    numberArrayElements(): number {
        return this.values.length;
    }
    //g) Retorne o maior elemento do array. (**
    getBiggestValue(): number {
        return biggestValueArray(this.values);
    }
    // h) Retorne o menor elemento do array. (**)
    getSmallestValue(): number {
        return smallValueArray(this.values);
    }
    //i) Retorne a média de todos os elementos. (**)
    getAverageValue(): number {
        return averageArrayElements(this.values);
    }
    //j) Retorne a média de todos os números pares. (**)
    getAverageEvenElementsValue(): number {
        let sum = somaPares(this.values);
        let count = contaPares(this.values);
        return Math.trunc(sum / count);
    }
    //k) Retorne a média de todos os números ímpares. (**)
    getAverageOddElementsValue(): number {
        let sum = somaImpares(this.values);
        let count = contaImpares(this.values);
        return Math.trunc(sum / count);
    }
    // l) Retorne a média de todos os múltiplos de um dado número. (**)
    getAverageMultiplesOfNumber(multiple: number): number {
        let count: number = 0;
        let sum: number = 0;

        for (let i = 0; i < this.values.length; i++) {
            if (this.isMultipleOf(i, multiple)) {
                sum += this.values[i];
                count++;
            }
        }
        return Math.trunc(sum / count);
    }
    private isMultipleOf(i: number, multiple: number) {
        return i % multiple === 0;
    }

    //m) Ordene os valores do array por ordem ascendente. (***)

    sortAscendingOrder(): void {
        this.values.sort((a, b) => a - b);
    }

    //n) Ordene os valores do array por ordem descendente. (***)

    sortDescendingOrder(): void {
        this.values.sort((b, a) => a - b);
    }
    //o) Retorne True caso o array esteja vazio e False em caso contrário. (*

    isArrayEmpty(): boolean {

        return this.values.length === 0;
    }

    //p) Retorne True caso o array contenha apenas um elemento e False em caso contrário. (*)

    arrayHasOneElement(): boolean {

        return this.values.length === 1;
    }

    //q) Retorne True se o array tiver apenas elementos pares e False em caso contrário. (**)

    arrayOnlyHasEvenElements(): boolean {

        let arrayIsOnlyEven = true;
        for (let i = 0; i < this.values.length; i++) {
            if (this.values[i] % 2 != 0) {
                arrayIsOnlyEven = false;
                break;
            }
        }
        return arrayIsOnlyEven;
    }

    // r) Retorne True se o array tiver apenas elementos ímpares e False em caso contrário. (**

    arrayOnlyHasOddElements(): boolean {

        let arrayIsOnlyOdd = true;
        for (let i = 0; i < this.values.length; i++) {
            if (this.values[i] % 2 == 0) {
                arrayIsOnlyOdd = false;
                break;
            }
        }
        return arrayIsOnlyOdd;
    }

    // s) Retorne True se o array tiver elementos duplicados e False em caso contrário. (****)

    arrayHasDuplicateElements(): boolean {

        let arrayHasDoubles = false;
        for (let i = 0; i < this.values.length; i++) {
            for (let j = i + 1; j < this.values.length; j++) {
                if (this.values[i] === this.values[j]) {
                    arrayHasDoubles = true;
                }
            }
        }
        return arrayHasDoubles;
    }
    // t) Retorne os elementos do array cujo número de algarismos é superior ao número médio de algarismos de todos os elementos do array. (***)

    countDigits(num: number): number {
        let count: number = 1;
        while (num >= 10) {
            num /= 10;
            count++;
        }
        return count;
    }
    filterNumbersByAvgDigits(): number[] {

        let arrayElementsBiggerAvgDigits = [];
        let totalDigits = 0;

        for (let i = 0; i < this.values.length; i++) {
            totalDigits += this.countDigits(this.values[i]);
        }
        let avgDigits = totalDigits / this.values.length;

        for (let i = 0; i < this.values.length; i++) {
            if (this.countDigits(this.values[i]) > avgDigits) {
                arrayElementsBiggerAvgDigits.push(this.values[i]);
            }
        }
        return arrayElementsBiggerAvgDigits;
    }

    // u) Retorne os elementos do array compostos exclusivamente por algarismos pares. (***)

    isNumberOnlyEvenDigits(num: number): boolean {
        while (num > 0) {
            const digit = num % 10;
            if (digit % 2 !== 0) {
                return false;
            }
            num = Math.trunc(num / 10);
        }
        return true;
    }
    arrayElementsWithEvenNumbers(): number[] {

        let arrayElementsEvenDigits = []

        for (let i = 0; i < this.values.length; i++) {
            if (this.isNumberOnlyEvenDigits(this.values[i])) {
                arrayElementsEvenDigits.push(this.values[i])
            }
        }
        return arrayElementsEvenDigits;
    }

    // v) Retorne os elementos que são sequências crescentes (e.g. 347) do array. (**)

    convertNumberIntoDigitSequence(num: number): number[] {

        const digits: number[] = [];
        let n: number = num;
        // Converter o número em uma sequência de dígitos
        while (n > 0) {
            const d: number = n % 10;
            digits.unshift(d);
            n = Math.floor(n / 10);
        }
        return digits;
    }
    arrayElementsAscendingNumbersSequence(num: number): boolean {

        let digits = this.convertNumberIntoDigitSequence(num);
        let sequenceIsAscending = true;
        for (let j = 1; j < digits.length; j++) {
            if (digits[j] <= digits[j - 1]) {
                sequenceIsAscending = false;
            }
        }
        return sequenceIsAscending;
    }
    elementsWithAscendingSequence(): number[] {
        let elements: number[] = [];
        for (let i = 0; i < this.values.length; i++) {
            if (this.arrayElementsAscendingNumbersSequence(this.values[i])) {
                elements.push(this.values[i]);
            }
        }
        return elements;
    }

    //w) Retorne as capicuas existentes no array. (**)

    checkPalindromicElements(): number[] {

        let palindromicElements: number[] = [];

        for (let i = 0; i < this.values.length; i++) {
            if (checkCapicua(this.values[i])) {
                palindromicElements.push(this.values[i]);
            }
        }
        return palindromicElements;
    }

    // x) Retorne os números existentes no array compostos exclusivamente por um mesmo algarismo (e.g., 222). (**)

    checkNumberIsSingleDigit(num: number): boolean {

        let isSingleDigit = true;
        const firstDigit = num % 10; // obter o primeiro dígito
        while (num > 0) {
            const digit = num % 10; // obter o próximo dígito
            if (digit !== firstDigit) {
                isSingleDigit = false;;
            }
            num = Math.floor(num / 10); // remover o último dígito
        }
        return isSingleDigit;
    }
    checkNumberIsSingleDigitAlternative(num: number): boolean {
        const digits = this.convertNumberIntoDigitSequence(num);
        return digits.every(d => d === digits[0]);
    }

    arrayElementsWithSingleDigit(): number[] {
        let singleDigitElements: number[] = []

        for (let i = 0; i < this.values.length; i++) {
            if (this.checkNumberIsSingleDigit(this.values[i])) {
                singleDigitElements.push(this.values[i])
            }
        }
        return singleDigitElements;
    }
    // y) Retorne os números existentes no array que não são de Amstrong. (**)
    arrayArmstrongElements(): number[] {

        let armstrongElements: number[] = [];

        for (let i = 0; i < this.values.length; i++) {
            if (!verificarArmStrong(this.values[i])) {
                armstrongElements.push(this.values[i])
            }
        }
        return armstrongElements
    }

    //z) Retorne os elementos que contêm uma sequência crescente de pelo menos n algarismos (e.g., n=3, 347). (***)

    arrayElementsAscendingNumbersSequenceCount(num: number): number {

        let digits = this.convertNumberIntoDigitSequence(num);
        let count: number = 1;
        for (let j = 1; j < digits.length; j++) {
            if (digits[j] > digits[j - 1]) {
                count++;
            }
        }
        return count;
    }
    arrayNumbersWtihNAscendingSequence(sequenceNumber: number): number[] {
        let ascendingElements: number[] = this.elementsWithAscendingSequence();
        let ascendingElementsNSequence: number[] = [];
        for (let i = 0; i < ascendingElements.length; i++) {
            if (this.arrayElementsAscendingNumbersSequenceCount(ascendingElements[i]) == sequenceNumber) {
                ascendingElementsNSequence.push(ascendingElements[i])
            }
        }
        return ascendingElementsNSequence
    }
    //aa) Retorne True ou False, consoante o array é igual a um array passado por parâmetro. (**)

    isArrayEqual(array: number[]): boolean {

        let arraysAreEqual = true;
        for (let i = 0; i < this.values.length; i++) {
            if (this.values.length != array.length && this.values[i] != array[i]) {
                arraysAreEqual = false;
            }
        }
        return arraysAreEqual  //  return this.values.length === array.length && this.values.every((value, index) => value === array[index]);
    }
}