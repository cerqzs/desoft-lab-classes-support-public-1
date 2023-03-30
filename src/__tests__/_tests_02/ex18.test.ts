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
    test('quando a hora de partida for de 16, minutos 1, horas duracao 2 e minutos duracao 2, o resultado deve ser: O comboio chega às 18:03  ', () => {

        //arrange

        const horaPartida: number = 16;
        const minutosPartida: number = 10;
        const horasDuracao: number = 24;
        const minutosDuracao: number = 9;

        const resultadoEsperado: string = "O comboio chega às 16:19";

        //act

        let result = comboiosCp(horaPartida, minutosPartida, horasDuracao, minutosDuracao)

        //assert

        expect(result).toBe(resultadoEsperado);
    }
    )
}
)