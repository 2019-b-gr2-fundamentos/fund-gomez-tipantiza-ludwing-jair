function Permutacion(numeroUno, numeroDos) {
    var factorial = 1;
    var tomados = 1;
    for (var contador = 1; contador <= numeroUno; contador++) {
        factorial = factorial * contador;
    }
    for (var contador1 = 1; contador1 <= (numeroUno - numeroDos); contador1++) {
        tomados = tomados * contador1;
    }
    var permutacion = (factorial / tomados);
    console.log(permutacion);
}
Permutacion(3, 2);
