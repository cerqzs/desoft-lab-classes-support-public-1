import { ArrayIntD } from "./ArrayInT";

let array: ArrayIntD = new ArrayIntD(23, 123);
let arrayParameter: number[] = [23, 123];
console.log(array.isArrayEqual(arrayParameter));