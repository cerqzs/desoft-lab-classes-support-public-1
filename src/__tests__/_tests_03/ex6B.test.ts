import { multiplosNumeroInteiro } from "../../lab03/functionslab3";

describe('multiplos de tres', () => {
    test('contar o numero de multiplos de tres no intervalo de 3,4,5,6,10,12,13 e testar mensagem de erro   ', () => {

        //arrange

        const intervalo: number[] = [3,4,5,6,10,12,13];
        const multiplo:number =3;
        const multiplo2:number= 3.5;

        const resultadoEsperado: number = 3;

        //act

        let result = multiplosNumeroInteiro(multiplo,intervalo);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(()=> {multiplosNumeroInteiro(multiplo2,intervalo)}).toThrow(new Error("O numero deve ser inteiro"))

    })
    
    })