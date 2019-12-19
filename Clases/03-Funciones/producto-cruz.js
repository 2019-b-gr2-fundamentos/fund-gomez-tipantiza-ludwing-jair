ejercicioMatriz();
function ejercicioMatriz() {
    var producto = 0;
    var resultado = 0;
    var matrizDos = [[1, 2, 3, 4, 9],
        [5, 6, 7, 8, 10]];
    for (var contador = 0; contador < matrizDos[0].length; contador++) {
        var indiceMatriz = matrizDos[0].length;
        var indiceActual = indiceMatriz - 1;
        producto = matrizDos[0][contador] * matrizDos[1][indiceActual];
        resultado = resultado + producto;
    }
    console.log(resultado);
}
