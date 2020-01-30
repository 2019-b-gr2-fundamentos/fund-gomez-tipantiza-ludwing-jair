export function some(arreglo:any[],
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