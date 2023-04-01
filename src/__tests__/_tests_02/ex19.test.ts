import { horaProcessamento } from "../../lab02/functions";

describe('hora Processamento', () => {
    test('quando as horas foram 10 e minutos 45 e segundos 44, e a duração 3600segundos o resultado deve ser 11:45:44  ', () => {

        //arrange

        const horaPartida: number = 10;
        const minutosPartida: number = 45;
        const segundosPartida: number = 0;
        const segundosDuracao: number = 3600;

        const resultadoEsperado: string = "O tempo final do processamento será às 11:45:00";

        //act

        let result = horaProcessamento(horaPartida,minutosPartida,segundosPartida,segundosDuracao)

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
} )

describe('hora Processamento', () => {
    test('test 2  ', () => {

        //arrange

        const horaPartida1: number = 1;
        const minutosPartida1: number = 45;
        const SegundosPartida1: number = 20;
        const segundosDuracao1: number = 6000;

        const resultadoEsperado1: string = "O tempo final do processamento será às 03:25:20";

        //act

        let result1 = horaProcessamento(horaPartida1, minutosPartida1,SegundosPartida1, segundosDuracao1)

        //assert

        expect(result1).toBe(resultadoEsperado1);
    }
    )
} )