function imprimirMensajeNVeces( mensaje: string, numeroVeces: number )
:void{ // el void nos dice que la funcion no devuelve nada 
    if(numeroVeces == 0){
        console.log('Se termino');
    }else{
        console.log(mensaje);
        const nuevoNumeroVeces = numeroVeces - 1;
        imprimirMensajeNVeces(mensaje, nuevoNumeroVeces);
    }

}

//function main(){
//   imprimirMensajeNVeces('hola', 3);
//}



const arreglo1 = [1,2,3,4,5];
console.log(arreglo1);
function recorrerUnArreglo(arreglo1:number[],indiceDeElementos:number): void{
    if(indiceDeElementos <=4)
        const indiceDeElementosNuevo = indiceDeElementos + 1;
        recorrerUnArreglo(arreglo1, indiceDeElementosNuevo);
    }else{
     main();
    }
        
}
function main(){
    recorrerUnArreglo(arreglo1, 0);

}

/*
1) cuantos elementos tiene el arreglo
2) imprimir el arreglo
3) seleccionar el primer elemento
*/


















const arregloDos =[1,2,3,4,5,6,7,8]
//Multiplicar el 0* n elemento + multiplicar el 0 +1 *n-1 elemento + multiplicar 0 + 2* n-2 elemento +
const arregloDosDosDimensiones = 
[
    [1,2,3,4],
    [5,6,7,8]
];
arregloDosDosDimensiones[0][0]//1
arregloDosDosDimensiones[0][1]//2
arregloDosDosDimensiones[1][0]//3
arregloDosDosDimensiones[1][1]//4

function productoCruz(vectores : number[][]):number[]{
    return[0,0,(1*4)-(2*3)]

}


// definir el tamaño
// repetir calculo n veces (n=tamaño)
/*
3.1)1er elemento 1er arreglo 
3.2)ultimo elmento del 2do arreglo
3.3)sumar los elementos 
3.4)1er elemento + 1=2do elemento 
3.5)ultimo elementon -1 = penultimo del 2do arreglo
3.6) sumar los elementos 
))*/
