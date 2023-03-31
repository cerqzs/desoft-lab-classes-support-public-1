export function calcularMediaPesada(nota1: number, nota2: number, nota3: number, peso1: number, peso2: number, peso3: number): number {
    let mediaPesada: number;
    mediaPesada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
    return mediaPesada
}
/*
export function calcularPesoTotal(peso1: number, peso2: number, peso3: number): number {
    let total: number;
    total = peso1 + peso2 + peso3;
    return total
}

export function calcularNotasPesos(nota1: number, nota2: number, nota3: number, peso1: number, peso2: number, peso3: number): number {
    let notasPesos: number;
    notasPesos = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3);
    return notasPesos
}
*/
export function analisarValor(nota1: number): boolean {
    return nota1 >= 8;

}

export function distanciaEntrePontos(x1: number, x2: number, y1: number, y2: number): number {
    let distancia: number;
    distancia = Math.round(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
    return distancia;
}

export function operadoresDivisao(numero: number): number {
    let digito1: number, digito2: number, digito3: number;

    if (numero < 100 || numero > 999) {
        throw new RangeError("Número não tem 3 dígitos");
    } else {
        digito3 = numero % 10;
        digito2 = Math.trunc(numero / 10) % 10;
        digito1 = Math.floor(numero / 100) % 10;
    }

    return digito1;
}

export function numeroPar(num: number): boolean {
    return num % 2 === 0;
}

export function calculoFuncaoMat(x: number): number {
   
   const valorZero:number=0;
    if (x < valorZero) {
        return x;
    } else if (x === 0) {
        return valorZero;
    } else {
        return x * 2 - 2 * x;
    }
}

export function volumeCubo(area: number): string {
    let volume: number= -1;
    let aresta: number;
    if (area > 0) {
        aresta = Math.sqrt(area / 6);
        volume = aresta ** 3;
    } 
    volume = volume / 1000;
    if (volume <= 1) {
        return 'Pequeno';
    } else if (1 < volume && volume <= 2) {
        return "médio";
    } else {
        return "Grande";
    }
}

// ex09
export function saudacaoHoraDia(num: number): string {
    if (num >= 21601 && num <= 43200) {
        return "Bom dia";
    } else if (num > 43200 && num <= 72000) {
        return "Boa Tarde";
    } else if(num >0 && num <= 21600 || num > 72000 && num <= 86400){
        return "Boa noite";
    } else {
        throw new RangeError("O dia só tem 24 horas")
    }
}
/*
export function saudacaoDoDia(segundos: number): string {
    const hora = new Date(segundos * 1000).getHours(); // converter segundos em objeto Date e obter hora
    if (hora >= 6 && hora < 12) {
        return "Bom dia";
    } else if (hora >= 12 && hora < 20) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}
*/
export function tempoDoDia(segundos: number): string {
    const horas: number = Math.floor(segundos / 3600);
    const minutos: number = Math.floor((segundos % 3600) / 60);
    const sec: number = segundos % 60;

    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

export function multiplosCheck(x: number, y: number): boolean {
    return x % y === 0 || y % x === 0;
}

export function imprimeMensagemMultiplos(x: number, y: number): string {
    if (x % y == 0) {
        return `${x} é multiplo de ${y}`;
    } else if (y % x == 0) {
        return `${y} é multiplo de ${x}`;
    } else {
        return `${x} não é multiplo nem divisor de ${y}`;
    }
}

export function numeroDeTresDigitos(numero: number): string {
    if (numero < 100 || numero > 999) {
        throw new RangeError("O numero deve ter 3 digitos");
    }
    const centenas: number = Math.floor(numero / 100);
    const dezenas: number = Math.floor(numero / 10) % 10;
    const unidades: number = numero % 10;

    if (unidades > dezenas && dezenas > centenas) {
        return "A sequencia é crescente.";
    } else {
        return "A sequencia não é crescente.";
    }
}

export function artigoSaldo(preco: number): number {
    if (preco > 200) {
        return preco = preco -(preco * 0.6);
    } else if (100 < preco && preco <= 200) {
        return preco =preco - (preco * 0.4);
    } else if (50 < preco && preco <= 100) {
        return preco = preco -(preco * 0.3);
    } else {
        return preco = preco -(preco * 0.2);
    }
}

export function notasTurma(aprovados: number, limiteMin: number, limiteMax: number): string {
    if (aprovados < limiteMin || aprovados > limiteMax) {
        return "Valor invalido";
    } else if (aprovados < 0.2) {
        return "Turma má";
    } else if (aprovados < 0.5) {
        return "Turma fraca";
    } else if (aprovados < 0.7) {
        return "Turma razoavel";
    } else if (aprovados < 0.9) {
        return "Turma Boa";
    } else {
        return "Turma Excelente";
    }
}

export function indicePoluicao(poluicao: number): string {
    if (poluicao > 0.3 && poluicao <= 0.4) {
        return "As industrias do 1º grupo devem suspender as suas atividades"
    } else if (poluicao > 0.4 && poluicao <= 0.5) {
        return "As industrias do 1º e 2º devem suspender as suas atividades"
    } else if (poluicao > 0.5) {
        return "As industrias dos 3 grupos devem suspender as suas atividades"
    } else {
        return "O indice de poluição é aceitavel"
    }
}



export function calcularTempoECustoTotal(grama: number, arvores: number, arbustos: number): string {
    const sGrama: number = 300;
    const sArvores: number = 600;
    const sArbustos: number = 400;
    const vGrama: number = 10;
    const vArvores: number = 20;
    const vArbustos: number = 15;
    const cHora: number = 10;
    const hora: number = 3600;

    let tGrama: number = grama * sGrama;
    let tArvores: number = arvores * sArvores;
    let tArbustos: number = arbustos * sArbustos;

    let totalTempo: number = Math.round((tGrama + tArvores + tArbustos) / hora);
    let custoTempo: number = cHora * totalTempo;

    let cGrama: number = grama * vGrama;
    let cArvores: number = arvores * vArvores;
    let cArbustos: number = arbustos * vArbustos;

    let custoTotal: number = cGrama + cArvores + cArbustos + custoTempo;

    return `Tempo total necessário: ${totalTempo} horas e um total: ${custoTotal} €`;
}



export function estafeta(dia1: number, dia2: number, dia3: number, dia4: number, dia5: number): number {

    let km: number = 1.609;
    let mediaDiariaKm: number;
    let mediaDiaria: number = (dia1 + dia2 + dia3 + dia4 + dia5) / 5;

    mediaDiariaKm = mediaDiaria * km;

    return mediaDiariaKm;
}


export function pintoresPorArea(area: number, salarioPintor: number): number {

    const horasPintor: number = 8;
    const rendimentoPintor: number = 2;
    let pintores: number;
    let custoPintor: number;

    if(area<=0) {
        throw new RangeError("a area tem de ser maior que 0")
    }

    if (area > 0 && area <= 100) {
        pintores = 1;
    } else if (area > 100 && area <= 300) {
        pintores = 2;
    } else if (area > 300 && area <= 1000) {
        pintores = 3;
    } else {
        pintores = 4;
    }

    custoPintor = ((area / rendimentoPintor / horasPintor) * salarioPintor) * pintores;

    return custoPintor;
}


export function tintaArea(area: number, custoLitroTinta: number, rendimentoTinta: number): number {
    let custoTotalTinta: number;

    custoTotalTinta = (area / rendimentoTinta) * custoLitroTinta;

    return custoTotalTinta

}

export function comboiosCp(horaPartida: number, minutosPartida: number, horasDuracao: number, minutosDuracao: number): string {

    const HoraChegadaMin = horaPartida * 60 + minutosPartida;
    const duracaoMin = horasDuracao * 60 + minutosDuracao;
    const chegadaEmMin = HoraChegadaMin + duracaoMin;

    let horaChegada = Math.floor(chegadaEmMin / 60) % 24; // converte a hora de chegada de volta para o formato de hora e minuto
    let minChegada = chegadaEmMin % 60;

    if(horaChegada == horaPartida && minChegada >= minutosPartida) {
        throw new Error("a viagem nao pode durar mais de 24h")
    }
    if (horaChegada < horaPartida) {
        return `O comboio chega no dia seguinte às ${horaChegada.toString().padStart(2, '0')}:${minChegada.toString().padStart(2, '0')}`;
    } else {
        return `O comboio chega às ${horaChegada.toString().padStart(2, '0')}:${minChegada.toString().padStart(2, '0')}`;
    }

}

export function horaProcessamento(horasProcess: number, minutosProcess: number, segundosProcess: number, duracaoSegundosProcess: number): String {

    const horasProcessSegundos = horasProcess * 3600;
    const minutosProcessSegundos = minutosProcess * 60;

    let TempoTotalProcessSegundos = horasProcessSegundos + minutosProcessSegundos + segundosProcess + duracaoSegundosProcess;
    let TempoTotalProcessFormatoHoras = Math.trunc(TempoTotalProcessSegundos / 3600) % 24;
    let tempoTotalProcessFormatoMin = Math.trunc((TempoTotalProcessSegundos % 3600) / 60);
    let tempoTotalProcessFormatoSegundos = TempoTotalProcessSegundos % 60;

    return `O tempo final do processamento será às ${TempoTotalProcessFormatoHoras.toString().padStart(2, '0')}:${tempoTotalProcessFormatoMin.toString().padStart(2, '0')}:${tempoTotalProcessFormatoSegundos.toString().padStart(2, '0')}`;
}

export function salarioSemanal(horasDetrabalhoSemanais: number): number {

    const valorHora: number = 7.5;
    const horaSemanais: number = 36;
    const valorHoraExtra1: number = 10;
    const valorHoraExtra2: number = 15;
    const horasExtras: number = horasDetrabalhoSemanais - horaSemanais;
    let salarioSemanal: number = 0;

    if (horasDetrabalhoSemanais <= horaSemanais) {
        salarioSemanal = valorHora * horaSemanais;
    } else if (horasExtras <= 5) {
        salarioSemanal = horaSemanais * valorHora + horasExtras * valorHoraExtra1;
    } else {
        salarioSemanal = horaSemanais * valorHora + 5 * valorHoraExtra1 + (horasExtras - 5) * valorHoraExtra2;
    }
    return salarioSemanal
}