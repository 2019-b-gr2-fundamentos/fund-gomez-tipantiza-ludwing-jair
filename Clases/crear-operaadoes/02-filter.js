"use strict";
exports.__esModule = true;
function calcular(funcion, numUno, numDos) {
    var valorInicial = 10;
    return funcion(numUno, numDos, valorInicial);
}
exports.calcular = calcular;
function sumar(numUno, numDos, valorInicial) {
    return numUno + numDos;
}
exports.sumar = sumar;
calcular(sumar, 1, 1);
calcular(function (numUno, numDos, valorInicial) {
    return numUno - numDos;
}, 5, 2);
function filter(arreglo, funcion) {
    var arregloFiltradro = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == true) {
            arregloFiltradro.push(arreglo[i]);
        }
    }
    return arregloFiltradro;
}
exports.filter = filter;
