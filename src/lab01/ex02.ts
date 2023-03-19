export function calcularPrecoRamo (rosas: number, tulipas:number, pRosa: number, pTulipa: number): number {
    let ramo: number; 
    ramo = rosas * pRosa + tulipas* pTulipa; 
    return ramo
}

let b:number; 
b= calcularPrecoRamo (1, 1, 1, 1);
console.log ("O preço do ramo é"  +b)