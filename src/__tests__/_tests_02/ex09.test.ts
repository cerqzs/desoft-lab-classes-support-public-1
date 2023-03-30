import { saudacaoHoraDia } from "../../lab02/functions";

describe ('Testar saudacao Hora do dia', () => {
    test ('consoante os segundos introduzidos devolver saudação do dia apropriada. 21752 deve devolver bom dia', () => {

        //arrange

        const segundos:number= 21752;
        const resultadoEsperado:string= "Bom dia";
        //act

        let horaDia= saudacaoHoraDia(segundos);

        //assert

        expect(horaDia).toBe(resultadoEsperado);
    }
    )
}
)

describe ('Testar saudacao Hora do dia', () => {
    test ('consoante os segundos introduzidos devolver saudação do dia apropriada. 55600 deve devolver boa tarde', () => {

        //arrange

        const segundos:number= 55600;
        const resultadoEsperado:string= "Boa Tarde";
        //act

        let horaDia= saudacaoHoraDia(segundos);

        //assert

        expect(horaDia).toBe(resultadoEsperado);
    }
    )
}
)

describe ('Testar saudacao Hora do dia', () => {
    test ('consoante os segundos introduzidos devolver saudação do dia apropriada. 20500 deve devolver boa noite', () => {

        //arrange

        const segundos:number= 20500;
        const resultadoEsperado:string= "Boa noite";
        //act

        let horaDia= saudacaoHoraDia(segundos);

        //assert

        expect(horaDia).toBe(resultadoEsperado);
    }
    )
}
)
describe ('Testar saudacao Hora do dia', () => {
    test ('21601 = Bom dia', () => {

        //arrange

        const segundos:number= 21601;
        const resultadoEsperado:string= "Bom dia";
        //act

        let horaDia= saudacaoHoraDia(segundos);

        //assert

        expect(horaDia).toBe(resultadoEsperado);
    }
    )
}
)
describe ('Testar saudacao Hora do dia', () => {
    test ('43200 = Bom dia', () => {

        //arrange

        const segundos:number= 43200;
        const resultadoEsperado:string= "Bom dia";
        //act

        let horaDia= saudacaoHoraDia(segundos);

        //assert

        expect(horaDia).toBe(resultadoEsperado);
    }
    )
}
)
describe ('Testar saudacao Hora do dia', () => {
    test ('21601 = Bom dia', () => {

        //arrange

        const segundos:number= 21601;
        const resultadoEsperado:string= "Bom dia";
        //act

        let horaDia= saudacaoHoraDia(segundos);

        //assert

        expect(horaDia).toBe(resultadoEsperado);
    }
    )
}
)
describe ('Testar saudacao Hora do dia', () => {
    test ('21600 = Boa noite', () => {

        //arrange

        const segundos:number= 21600;
        const resultadoEsperado:string= "Boa noite";
        //act

        let horaDia= saudacaoHoraDia(segundos);

        //assert

        expect(horaDia).toBe(resultadoEsperado);
    }
    )
}
)
describe ('Testar saudacao Hora do dia', () => {
    test ('86400 = Boa noite', () => {

        //arrange

        const segundos:number= 86400;
        const resultadoEsperado:string= "Boa noite";
        //act

        let horaDia= saudacaoHoraDia(segundos);

        //assert

        expect(horaDia).toBe(resultadoEsperado);
    }
    )
}
)
describe ('Testar saudacao Hora do dia', () => {
    test ('0 = erro', () => {

        //arrange

        const segundos:number= 0;
        //act

        //assert

        expect(()  => {
            saudacaoHoraDia(segundos);
        }).toThrow(RangeError("O dia só tem 24 horas"));
        });
    });
    describe ('Testar saudacao Hora do dia', () => {
        test ('-1 = erro', () => {
    
            //arrange
    
            const segundos:number= -1;
            //act
    
            //assert
    
            expect(()  => {
                saudacaoHoraDia(segundos);
            }).toThrow(RangeError("O dia só tem 24 horas"));
            });
        });
        describe ('Testar saudacao Hora do dia', () => {
            test ('95000 = erro', () => {
        
                //arrange
        
                const segundos:number= 95000;
                //act
        
                //assert
        
                expect(()  => {
                    saudacaoHoraDia(segundos);
                }).toThrow(RangeError("O dia só tem 24 horas"));
                });
            });

    describe ('Testar saudacao Hora do dia', () => {
        test ('500 = Boa noite', () => {
    
            //arrange
    
            const segundos:number= 500;
            const resultadoEsperado:string= "Boa noite";
            //act
    
            let horaDia= saudacaoHoraDia(segundos);
    
            //assert
    
            expect(horaDia).toBe(resultadoEsperado);
        }
        )
    }
    )

    describe ('Testar saudacao Hora do dia', () => {
        test ('80000 = Boa noite', () => {
    
            //arrange
    
            const segundos:number= 80000;
            const resultadoEsperado:string= "Boa noite";
            //act
    
            let horaDia= saudacaoHoraDia(segundos);
    
            //assert
    
            expect(horaDia).toBe(resultadoEsperado);
        }
        )
    }
    )
    describe ('Testar saudacao Hora do dia', () => {
        test ('72000 = Boa noite', () => {
    
            //arrange
    
            const segundos:number= 72000;
            const resultadoEsperado:string= "Boa Tarde";
            //act
    
            let horaDia= saudacaoHoraDia(segundos);
    
            //assert
    
            expect(horaDia).toBe(resultadoEsperado);
        }
        )
    }
    )

    describe ('Testar saudacao Hora do dia', () => {
        test ('71999 = Boa tarde', () => {
    
            //arrange
    
            const segundos:number= 71999;
            const resultadoEsperado:string= "Boa Tarde";
            //act
    
            let horaDia= saudacaoHoraDia(segundos);
    
            //assert
    
            expect(horaDia).toBe(resultadoEsperado);
        }
        )
    }
    )

    describe ('Testar saudacao Hora do dia', () => {
        test ('43300 = Boa tarde', () => {
    
            //arrange
    
            const segundos:number= 43300;
            const resultadoEsperado:string= "Boa Tarde";
            //act
    
            let horaDia= saudacaoHoraDia(segundos);
    
            //assert
    
            expect(horaDia).toBe(resultadoEsperado);
        }
        )
    }
    )
    
    describe ('Testar saudacao Hora do dia', () => {
        test ('43201 = Boa tarde', () => {
    
            //arrange
    
            const segundos:number= 43201;
            const resultadoEsperado:string= "Boa Tarde";
            //act
    
            let horaDia= saudacaoHoraDia(segundos);
    
            //assert
    
            expect(horaDia).toBe(resultadoEsperado);
        }
        )
    }
    )

    
    describe ('Testar saudacao Hora do dia', () => {
        test ('72000.01 = Boa tarde', () => {
    
            //arrange
    
            const segundos:number= 72000.01;
            const resultadoEsperado:string= "Boa noite";
            //act
    
            let horaDia= saudacaoHoraDia(segundos);
    
            //assert
    
            expect(horaDia).toBe(resultadoEsperado);
        }
        )
    }
    )