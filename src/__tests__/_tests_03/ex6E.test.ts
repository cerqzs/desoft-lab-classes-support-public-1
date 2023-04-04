import { somaMultiplosDoisNumInteiros } from "../../lab03/functionslab3";

describe('soma dos multiplos de dois numeros inteiros', () => {
    test('calcular a soma dos multiplos de 5 e 2 no intervalo de 3,4,5,6,10,12,15 e testar mensagem de erro', () => {

        //arrange

        const intervalo: number[] = [3,4,5,6,10,12,15];
        const multiploX:number =5;
        const multiploY:number=2;
        const multiploA:number= 0.5;
        const multiploB:number=1.3;

        const resultadoEsperado: number = 10;

        //act

        let result = somaMultiplosDoisNumInteiros(multiploX,multiploY,intervalo);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(()=>{somaMultiplosDoisNumInteiros(multiploA,multiploX,intervalo)}).toThrow(new Error("Os dois numeros devem ser inteiros"))
        expect(()=>{somaMultiplosDoisNumInteiros(multiploY,multiploB,intervalo)}).toThrow(new Error("Os dois numeros devem ser inteiros"))
        expect(()=>{somaMultiplosDoisNumInteiros(multiploA,multiploB,intervalo)}).toThrow(new Error("Os dois numeros devem ser inteiros"))
        
    })
    
})