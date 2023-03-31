import { comboiosCp } from "../../lab02/functions";

describe('comboios cp', () => {
    test('quando a hora de partida for de 22, minutos 35, horas duracao 4 e minutos duracao 20, o resultado deve ser: O comboio chega no dia seguinte às 02:55  ', () => {

        //arrange

        const horaPartida: number = 22;
        const minutosPartida: number = 35;
        const horasDuracao: number = 4;
        const minutosDuracao: number = 20;

        const resultadoEsperado: string = "O comboio chega no dia seguinte às 02:55";

        //act

        let result = comboiosCp(horaPartida, minutosPartida, horasDuracao, minutosDuracao)

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)

describe('comboios cp', () => {
    test('quando a hora de partida for de 16, minutos 1, horas duracao 2 e minutos duracao 2, o resultado deve ser: O comboio chega às 18:03  ', () => {

        //arrange

        const horaPartida: number = 16;
        const minutosPartida: number = 1;
        const horasDuracao: number = 2;
        const minutosDuracao: number = 2;

        const resultadoEsperado: string = "O comboio chega às 18:03";

        //act

        let result = comboiosCp(horaPartida, minutosPartida, horasDuracao, minutosDuracao)

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)


describe('comboios cp', () => {
    test('combo mutantes ', () => {

        //arrange

        const horaPartida1: number = 16;
        const minutosPartida1: number = 0;
        const horasDuracao1: number = 24;
        const minutosDuracao1: number = 10;
        
        const horaPartida2: number = 1;
        const minutosPartida2: number = 1;
        const horasDuracao2: number = 3;
        const minutosDuracao2: number = 6;

        const horaPartida3: number = 23;
        const minutosPartida3: number = 0;
        const horasDuracao3: number = 2;
        const minutosDuracao3: number = 6;

        const horaPartida4: number = 23;
        const minutosPartida4: number = 0;
        const horasDuracao4: number = 2;
        const minutosDuracao4: number = 0;
       
        const horaPartida5: number = 16;
        const minutosPartida5: number =0;
        const horasDuracao5: number = 24;
        const minutosDuracao5: number = 0;
       
       
       
       
        const resultadoEsperado2: string = "O comboio chega às 04:07";
        const resultadoEsperado3: string = "O comboio chega no dia seguinte às 01:06";
        const resultadoEsperado4:string= "O comboio chega no dia seguinte às 01:00";

        //act

        let result2 = comboiosCp(horaPartida2, minutosPartida2, horasDuracao2, minutosDuracao2);
        let result3= comboiosCp(horaPartida3,minutosPartida3,horasDuracao3,minutosDuracao3);
        let result4= comboiosCp(horaPartida4,minutosPartida4,horasDuracao4,minutosDuracao4);
        //assert

        expect(() => comboiosCp(horaPartida1,minutosPartida1,horasDuracao1,minutosDuracao1)).toThrowError(Error("a viagem nao pode durar mais de 24h"));
        expect(() => comboiosCp(horaPartida5,minutosPartida5,horasDuracao5,minutosDuracao5)).toThrowError(Error("a viagem nao pode durar mais de 24h"));
        expect(result2).toBe(resultadoEsperado2);
        expect(result3).toBe(resultadoEsperado3);
        expect(result4).toBe(resultadoEsperado4);
    }
    )
}
)
