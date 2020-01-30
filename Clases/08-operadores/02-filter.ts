export function calcular(funcion,numUno,numDos){
    const valorInicial=10
return funcion(numUno,numDos,valorInicial)
}


export function sumar(numUno,numDos,valorInicial){
    return numUno+numDos;
}
calcular(sumar,1,1);
calcular(
    function (numUno,numDos,valorInicial){
    return numUno-numDos;
},
5,
2);

export function filter(arreglo:any[],
    funcion:(valorActual:any,indice:number,arreglo:any[])=>boolean):any[]
    {
const arregloFiltradro=[]
for (let i=0;i<arreglo.length;i++){
    const respuestaFuncion=funcion(arreglo[i],i,arreglo);
if(respuestaFuncion==true){
arregloFiltradro.push(arreglo[i]);
}
}

return arregloFiltradro;
}