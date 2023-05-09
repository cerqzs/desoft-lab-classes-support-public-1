import { contaImpares, contaPares, somaImpares, somaPares } from "../lab03/functionslab3";
import { averageArrayElements, biggestValueArray, multiplesInInterval, smallValueArray } from "../lab04/functions";


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
    addValue(value: number): void {
        this.values.push(value);
    }

    // d) Retire o primeiro elemento do array encapsulado com um determinado valor. (*
    removeValue(value: number): void {
        const index = this.values.indexOf(value);
        if (index !== -1) {
            this.values.splice(index, 1);  // index | nr elementos a remover
        }
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

        for (let i = 0; i < this.values.length; i++) {
            for (let j = i + 1; j < this.values.length; j++) {
                if (this.values[i] === this.values[j]) {
                    return true;
                }
            }
        }
        return false;
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
}








