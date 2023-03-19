import { calcularLitros } from "../../lab01/ex03";
describe('testar função calcular litros', () => {
    test (' o total de litros deve ser 50240', () => {
        expect(calcularLitros(3.14,3,5,1000)).toBe(141300);
    })
    })