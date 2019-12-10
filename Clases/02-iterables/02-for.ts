//for
// 1) Declarar una variable 
// 2) Condición(Expresiones)
//Incrementar,Disminuir

/*for(let numeroExDeMiCrush= 7;numeroExDeMiCrush == 0;   //False
    numeroExDeMiCrush--){
    console.log('ES CAN DA LO ',numeroExDeMiCrush);numeroExDeMiCrush--;
}*/


/*for(let numeroExDeMiCrush= 7;numeroExDeMiCrush > 0;   
    numeroExDeMiCrush--){
    console.log('ES CAN DA LO ',numeroExDeMiCrush);
}*/

/*for(let numeroExDeMiCrush= 0;numeroExDeMiCrush <7 ;   
    numeroExDeMiCrush++){
    console.log('ES CAN DA LO ',numeroExDeMiCrush);} */

    for(let numeroExDeMiCrush= 0;numeroExDeMiCrush <= 6 ;   
        numeroExDeMiCrush++){
        console.log('ES CAN DA LO ',numeroExDeMiCrush);}

//ARREGLOS
// Representacion de un vector 
// 1 elemento (variable const numero = 1)
// Conjunto del mismo elementos([1,2,3,4,5,6,7])
// conjunto de diferentes elementos ([1,"abc",true])
const arregloNumeros = [1,2,3,4,5];
//const arregloNumeros = [1,2,3,4,5,6] queremos agregar 
//Función(Push) 
// Si existe una funcion elinmutable puede cambiar
//lET REASIGNAR
arregloNumeros.push(6);
console.log('arreglo Numeros',arregloNumeros);

arregloNumeros.pop();
console.log('arreglo de Numeros',arregloNumeros);
//Acceder a cada elemento del arreglo por el indice

const indiceElementoUno = 0;
arregloNumeros[indiceElementoUno];
arregloNumeros[0];
const indiceElementoCinco= 4;
arregloNumeros[indiceElementoCinco];
arregloNumeros[4];
//Acceder al elemento 5
// INDIE
//[1,2,3,4,5,]
// 0 1 2 3 4 
//indice
//console.log(arregloNumeros[4]);
console.log(arregloNumeros[indiceElementoCinco])






// Crear arreglo de 5 elementos
// Cada 2 elemento 1 0 un 0
// Ejmp[0,0,1,1,0]
// Exista al menos un elemento 1
//ej[0,0,0,1] valido

Math.floor(Math.random()* 2)

//
// Arreglo 
// 1) Elementos
// 2) Indices(0 index based) --> Posicion
// 3) Logitud -># Elementos
//console.log(arregloNumeros.length);

// For
// let tamaño = arregloNumeros.length
// tamaño >0
//--
/*for(let tamaño=arregloNumeros.length; tamaño > 0 ;   
    tamaño --){
    console.log('ES CAN ',tamaño);}*/