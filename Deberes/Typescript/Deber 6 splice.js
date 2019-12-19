// Agregar
function agregar(array, indice, valor) {
    var arregloNumero = [];
    var arregloAuxiliar = [];
    for (var contador = 0; contador < array.length; contador++) {
        arregloNumero[contador] = array[contador];
    }
    for (var contador1 = indice; contador1 < array.length; contador1++) {
        arregloAuxiliar[contador1] = arregloNumero[contador1];
    }
    arregloNumero[indice] = valor;
    for (var contador = indice + 1; contador < array.length + 1; contador++) {
        arregloNumero[contador] = arregloAuxiliar[contador - 1];
    }
    console.log(arregloNumero);
}
agregar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 999);
//------------------Eliminar-----------
function del(array, indice) {
    var arregloNumero = [];
    var arregloA = [];
    for (var contador = 0; contador < indice; contador++) {
        arregloNumero[contador] = array[contador];
    }
    for (var contador = indice + 1; contador < array.length; contador++) {
        arregloA[contador] = array[contador];
    }
    for (var contador = indice; contador < array.length - 1; contador++) {
        arregloNumero[contador] = arregloA[contador + 1];
    }
    console.log(arregloNumero);
}
del([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
