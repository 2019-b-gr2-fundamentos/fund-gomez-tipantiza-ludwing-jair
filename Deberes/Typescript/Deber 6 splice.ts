// Agregar
function agregar(array,indice,valor){
    const arregloNumero=[];
    const arregloAuxiliar=[];
    for(let contador=0;contador<array.length;contador++){
        arregloNumero[contador]=array[contador];
    }
    for(let otroContador=indice;otroContador<array.length;otroContador++){
        arregloAuxiliar[otroContador]=arregloNumero[otroContador];
    }
    arregloNumero[indice]=valor;
    for(let contador=indice+1;contador<array.length+1;contador++){
        arregloNumero[contador]=arregloAuxiliar[contador-1];
    }
    console.log(arregloNumero);
}
agregar([1,2,3,4,5,6,7,8,9,10],2,999);
//------------------Eliminar-----------

function del(array,indice){
    const arregloNumero=[];
    const arregloA=[];
    for(let contador=0;contador<indice;contador++){
        arregloNumero[contador]=array[contador];
    }
    for(let contador=indice+1;contador<array.length;contador++){
        arregloA[contador]=array[contador];
    }
    for(let contador=indice;contador<array.length-1;contador++){
        arregloNumero[contador]=arregloA[contador+1];
    }
    console.log(arregloNumero);
}
del([1,2,3,4,5,6,7,8,9,10],0);