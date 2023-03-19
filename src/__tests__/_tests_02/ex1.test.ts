import { calcularMediaPesada } from "../../lab02/functions"; 

describe ('Testar funcao Calculo media pesada', () =>{
    test ('sabendo que a nota1 foi de 15, nota2 de 18, nota3 de 9 e o peso1 de 35%, peso2 35% e peso3 de 30% a media final devera ser de 14.25', () => {

        // arrange

        const n1:number= 18;
        const n2:number=15;
        const n3:number= 9;
        const p1:number=35;
        const p2:number=35;
        const p3:number=30;
        const mediaEsperada:number= 14.25;

        // act

        let mediaFinal:number= calcularMediaPesada(n1,n2,n3,p1,p2,p3);

        // assert

        expect(mediaFinal).toBe(mediaEsperada);
    } 
    )
}
)

describe("calcularMediaPesada", () => {
    test("deve calcular a média ponderada corretamente", () => {
      const result = calcularMediaPesada(12, 14, 13, 30, 30, 40);
      expect(result).toBe(13); 
    });
  });