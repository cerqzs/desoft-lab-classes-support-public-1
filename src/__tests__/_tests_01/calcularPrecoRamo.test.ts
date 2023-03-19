import {calcularPrecoRamo } from "../../lab01/ex02";
describe('testar função calcularPrecoRamo', () => {
test (' preço do ramo deve resultar em 8', () => {
    expect(calcularPrecoRamo(2,2,2,2)).toBe(8);
})
})