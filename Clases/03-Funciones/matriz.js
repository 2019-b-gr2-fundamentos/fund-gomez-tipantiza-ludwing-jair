ejercicioMatriz();
function ejercicioMatriz() {
    var producto = 0;
    var resultado = 0;
    var matrizDos = [
        [1, 2, 3, 4, 9],
        [5, 6, 7, 8, 10]
    ];
    var indice = matrizDos[0].length;
    for (var contador = 0; contador < matrizDos[0].length; contador++) {
        indice--;
        producto = matrizDos[0][contador] * matrizDos[1][indice];
        resultado = resultado + producto;
    }
    console.log(resultado);
}
