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
//LET---->REAGISNAMOS 
const arregloNumeros = [1,2,3,4,5];
 
//Función(Push) queremos agregar al final
// Si existe una funcion elinmutable puede cambiar
//lET REASIGNAR
arregloNumeros.push(6);
//Funcion se pueden utilizar en inmutables
console.log('arreglo Numeros',arregloNumeros);
arregloNumeros.pop();
console.log('arreglo de Numeros',arregloNumeros);
console.log(arregloNumeros.length);


const indiceElementoUno = 0;
arregloNumeros[indiceElementoUno];
arregloNumeros[0];
const indiceElementoCinco= 4;
arregloNumeros[indiceElementoCinco];
arregloNumeros[4];
/*Arreglos tienen 
1)elementos 
2)indices (o index based)-->Posicion
3)Longitud---> cantidad de elementos
*/
//Acceder al elmento 5
//1)INDICE
//[1,2,3,4,5]
//  0 1 2 3 4 INICE
//console.log(arregloNumeros[4]);
console.log(arregloNumeros[indiceElementoCinco])
/*FOR
1)let tamanio=arregloNumeros.length//5
2)tamanio>0
3)tamanio--
/*---------------------------------------------*/

// Crear arreglo de 5 elementos
// Cada  elemento 1 0 un 0
// Ejmp[0,0,1,1,0]
// Exista al menos un elemento 1
//ej[0,0,0,1] valido

Math.floor(Math.random()* 2)
