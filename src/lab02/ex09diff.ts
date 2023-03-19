import { saudacaoDoDia, saudacaoHoraDia } from "./functions";

const agora = Date.now() / 1000;
console.log(saudacaoDoDia(agora)); // saída depende do horário atual