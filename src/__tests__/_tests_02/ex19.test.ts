import { horaProcessamento } from "../../lab02/functions";

describe('hora Processamento', () => {
    test('quando as horas foram 10 e minutos 45 e segundos 44, e a duração 3600segundos o resultado deve ser 11:45:44  ', () => {

        //arrange

        const horaPartida: number = 10;
        const minutosPartida: number = 45;
        const SegundosPartida: number = 44;
        const segundosDuracao: number = 3600;

        const resultadoEsperado: string = "O tempo final do processamento será às 11:45:44";

        //act

        let result = horaProcessamento(horaPartida, minutosPartida,segundosDuracao, segundosDuracao)

        //assert

        expect(result).toBe(result);
    }
    )
} )