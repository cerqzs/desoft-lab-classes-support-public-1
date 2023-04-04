import { multiplosDoisNumInteiros } from "../../lab03/functionslab3";

describe('multiplos de dois numeros inteiros', () => {
    test('contar o numero de multiplos de 5 e 2 no intervalo de 3,4,5,6,10,12,15 e testar mensagem de erro', () => {

        //arrange

        const intervalo: number[] = [3,4,5,6,10,12,15];
        const multiploX:number =5;
        const multiploY:number=2;
        const multiploA:number= 0.5;
        const multiploB:number=1.3;

        const resultadoEsperado: number = 6;

        //act

        let result = multiplosDoisNumInteiros(multiploX,multiploY,intervalo);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(()=>{multiplosDoisNumInteiros(multiploA,multiploX,intervalo)}).toThrow(new Error("Os dois numeros devem ser inteiros"))
        expect(()=>{multiplosDoisNumInteiros(multiploY,multiploB,intervalo)}).toThrow(new Error("Os dois numeros devem ser inteiros"))
        expect(()=>{multiplosDoisNumInteiros(multiploA,multiploB,intervalo)}).toThrow(new Error("Os dois numeros devem ser inteiros"))

    })
    
    })