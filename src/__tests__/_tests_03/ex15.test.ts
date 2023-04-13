import { checksumNumero } from "../../lab03/functionslab3";

describe('verificar numero bi', () => {
    test('se o numero tiver mais que 8 digitos retorna false', () => {

        //arrange
        const num: string ="123456789";

        const resultadoEsperado= false;

        //act 
        let result = checksumNumero(num);
        
        //assert

        expect(result).toBe(resultadoEsperado)
    })
})
describe('verificar numero bi', () => {
    test('se o numero for 12345678 retorna false', () => {

        //arrange
        const num: string ="12345678";

        const resultadoEsperado= false;

        //act 
        let result = checksumNumero(num);
        
        //assert

        expect(result).toBe(resultadoEsperado)
    })
})

describe('verificar numero bi', () => {
    test('se o numero for 11111118 retorna true', () => {

        //arrange
        const num: string ="11111118";

        const resultadoEsperado= true;

        //act 
        let result = checksumNumero(num);
        
        //assert

        expect(result).toBe(resultadoEsperado)
    })
})