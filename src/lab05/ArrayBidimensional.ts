import { biggestValueMatrix } from "../lab04/functions";
import { ArrayIntD } from "./ArrayInT";

export class ArrayBidimensional {
    // fields
    public vals: number[][];

    // constructor
    // a) Construtor público em que o array encapsulado fica vazio (i.e. sem valores). (*)
    // b) Construtor público que permita inicializar o array encapsulado com alguns valores. (**)
    constructor(...vals: number[][]) {
        this.vals = vals;
    }
    // methods
    // c) Adicione um novo elemento (valor) ao array encapsulado numa determinada linha, criando assim uma nova coluna nessa linha. (**)
    addValue(value: number, index: number) {
        this.vals[index].push(value);
        return this.vals;
    }
    //d) Retorne True caso o array bidimensional esteja vazio e False em caso contrário. (*)
    isArrayEmpty(): boolean {
        return this.vals.length === 0;
    }
    //e) Retorne o maior elemento do array. (**)
    biggestValue() {
        return biggestValueMatrix(this.vals);
    }
    //f) Retorne o menor elemento do array. (**)

    smallestValueMatrix(): number | undefined {
        let minValue = undefined;
        for (let i = 0; i < this.vals.length; i++) {
            for (let j = 0; j < this.vals[i].length; j++) {
                if (minValue === undefined || this.vals[i][j] < minValue) {
                    minValue = this.vals[i][j];
                }
            }
        }
        return minValue;
    }
    //g) Retorne a média dos elementos do array. (**)
    averageValuesMatrix(): number {
        let sum: number = 0;
        let count: number = 0;
        for (let i = 0; i < this.vals.length; i++) {
            for (let j = 0; j < this.vals[i].length; j++) {
                sum += this.vals[i][j];
                count++;
            }
        }
        return Math.trunc(sum / count)
    }

    //h) Retorne um array em que cada posição corresponde à soma dos elementos da coluna homóloga do array encapsulado. (**
}