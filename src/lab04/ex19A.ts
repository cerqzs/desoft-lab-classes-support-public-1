import { matrixProdutByConstant } from "./functions";

const nums: number[][] = [
    [1, 2],
    [10, 1]
]
const constant: number = 2;

let result = matrixProdutByConstant(nums, constant);

console.log(result);