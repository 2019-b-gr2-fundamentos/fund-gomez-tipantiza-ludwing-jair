"use strict";
exports.__esModule = true;
function calcular(funcion, numUno, numDos) {
    return funcion(numUno, numDos);
}
exports.calcular = calcular;
function sumar(numUno, numDos) {
    return numUno + numDos;
}
exports.sumar = sumar;
function restar(numUno, numDos) {
    return numUno - numDos;
}
exports.restar = restar;
calcular(sumar, 1, 1);
calcular(restar, 1, 2);
