import { ArrayBidimensional } from "./ArrayBidimensional";

const array = new ArrayBidimensional([1, 2, 3, 4, 5], [1, 2, 3]);
let row: number = 1;
let num: number = 2;

console.log(array.addValue(num, row));

