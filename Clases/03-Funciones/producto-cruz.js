ejercicioMatriz();
function ejercicioMatriz() {
    var producto = 0;
    var resultado = 0;
    var matrizDos = [[1, 2, 3, 4, 9],
        [5, 6, 7, 8, 10]];
    var indiceMatriz = matrizDos[0].length;
    for (var contador = 0; contador < matrizDos[0].length; contador++) {
        var indiceNuevo = indiceMatriz - 1;
        producto = matrizDos[0][contador] * matrizDos[1][indiceNuevo];
        resultado = resultado + producto;
    }
    console.log(resultado);
}
