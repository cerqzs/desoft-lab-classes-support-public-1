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
}