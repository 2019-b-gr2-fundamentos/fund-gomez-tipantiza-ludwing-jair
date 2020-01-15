//Para que sea un arreglo de multiples dimensiones cada elemento del arreglo es un arreglo (arreglo dentro de un arreglo);
/*
arregloDosDimensiones[0][0]; //1
arregloDosDimensiones[0][1]; //2
*/

/*
1) definir el tamaño 
2) repetir el calculo N veces (N=tamaño)
3.1) acceder al primer elemento del primer elemento
3.2) acceder al ultimo elemento del segundo arreglo
3.3) sumar los elementos
3.4) acceder al primer elemento + 1 = segundo elemento del primer arreglo
3.5) acceder al ultimo elemento - 1 = penultimo elemento del segundo arreglo
3.6) sumar los elementos
TIENE QUE DEVOLVER (RETURN [0,0, 1*7 + 2*6 + 3*5 + 4*4])
*/
/*
const arregloDosDimensiones = [
    [1,2,3,4],
    [4,5,6,7]
];
function multiplicarArreglos(arregloDosDimensiones, tamañoArreglo, indiceArreglo):number{
    const tamañoArreglo1 = arregloDosDimensiones[0].length;
    let n = tamañoArreglo1;
    let m = 0;
    const indiceArreglo1 = arregloDosDimensiones[0][m];
    let suma = 0;
    let producto = 0
for(tamañoArreglo; tamañoArreglo1 >= 0 && indiceArreglo1 <= 4; n-- && m++){
    m * n;
    multiplicarArreglos(arregloDosDimensiones, tamañoArreglo);
}
producto = m * n;
producto = producto + producto;
suma = suma + producto;
return [0,0,suma];
}
function main(){
    multiplicarArreglos(arregloDosDimensiones, 4);
}
*/
// Escriba un programa que verifique si dos matrices son iguales
// La matriz es de dos dimensiones n y m
// n y m pueden ser iguales o distintas.

const matriz1 = [
    [1,2,3],
    [4,5,6]
]
const matriz2 = [
    [1,2,3],
    [4,5,6]
]
const matriz3 = [
    [69,2,3],
    [4,5,6],
    [7,8,9]
]
// m es el numero de columnas
// n es el numero de columnas
function sacarMDeUnaMatriz (
    matriz: number[][]
    ): number{
    let m = matriz.length;
return m;
}

function sacarNDeUnaMatriz (
    matriz1: number[][]
    ): number{
    const posicion11 = matriz1[0].indexOf[0][1];
    const posicion21 = matriz1[1].indexOf[0][4];
    let primeraColumna = 0;
    if(posicion11 == 0 && posicion21 == 0){
        primeraColumna = 1;
    }
    const posicion12 = matriz2.indexOf[0][1];
    const posicion22 = matriz2.indexOf[1][1];
    let segundaColumna = 0;
    if(posicion12 == 1 && posicion22 == 1){
        segundaColumna = 1;
    }
    const posicion13 = matriz3.indexOf[0][1];
    const posicion23 = matriz3.indexOf[1][1];
    let terceraColumna = 0;
    if(posicion13 == 2 && posicion23 == 2){
        terceraColumna = 1;
    }
    let n = primeraColumna + segundaColumna + terceraColumna;
    return n;
}
/*
function main(){
    sacarMDeUnaMatriz(matriz1);
    sacarMDeUnaMatriz(matriz2);
    sacarMDeUnaMatriz(matriz3);
    sacarNDeUnaMatriz(matriz1);
    sacarNDeUnaMatriz(matriz2);
    sacarNDeUnaMatriz(matriz3);
    compararMatriz
}
*/

function compararMatriz(
    matriz1,
    matriz2
): boolean{
    let m1 = sacarMDeUnaMatriz(matriz1);
    let m2 = sacarMDeUnaMatriz(matriz2);
    //let m3 = sacarMDeUnaMatriz(matriz3);
    let n1 = sacarNDeUnaMatriz(matriz1);
    let n2 = sacarNDeUnaMatriz(matriz2);
    //let n3 = sacarNDeUnaMatriz(matriz3);
    if(m1 == m2 && n1 == n2){
    }
return true;
}

const sonIguales = compararMatriz(matriz1, matriz2); // true

if(sonIguales){
    console.log('Las Matrices son iguales');
}else{
    console.log('Las Matrices no son iguales');
}
