function SumarMatriz(matrizUno:number[][]):number {
    }
}



function verificarTodosLosElementosDeUnArregloSonArreglo(arreglo: any[]):boolean{
    for(let i = 0; i < arreglo.length; i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' && elementoActual.indexOf; // Truty
        if(!esUnArreglo){
            return false;
        }
    }
    return true;
    }
    
function obtenerPrimeraDimension(matrizUno: number[][]): number | boolean{
// VALIDACIONES
const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
if(esValido){
    const primeraDimensionArreglo = matrizUno.length;
    return primeraDimensionArreglo;
}else{
    return false;
}
}

function obtenerSegundaDimension(matrizUno: number[][]): number | boolean{
const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
if(esValido){
    let longitudActualMaxima = 0; // Auxiliar
    let longitudActualMinima = -1; // Auxiliar
    for(let i = 0; i < matrizUno.length; i++){
        const elementoActual = matrizUno[i]; // arreglo
        const longitudActual = elementoActual.length; // segunda dimension
        if(longitudActualMaxima < longitudActual){
            longitudActualMaxima = longitudActual;
        }
        if(longitudActualMinima == -1) {
            longitudActualMinima = longitudActual;
        }else{
            if(longitudActual <longitudActualMinima){
            longitudActualMinima = longitudActual;
        }
    }
    }
    if(longitudActualMaxima != longitudActualMinima){
        return false;
    }else{
        return matrizUno[0].length;
    }
}else{
    return false;
}
}




function main(){
const x = [
    [1,2,4],
    [3,4,4]
];
const resultado = SumarMatriz(x);
console.log('Resultado',resultado);
}
main();