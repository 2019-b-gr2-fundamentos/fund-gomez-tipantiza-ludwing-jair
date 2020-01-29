function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: 'Jair', nota: 7 },
        { id: 2, nombre: 'Lizet', nota: 10 },
        { id: 3, nombre: 'Mishel', nota: 7 },
        { id: 4, nombre: 'Genesis', nota: 7 },
        { id: 5, nombre: 'Bryan', nota: 4 },
        { id: 6, nombre: 'Steven', nota: 2 },
    ];
    //operador - foreach
    // enviamos --> nada
    // recibimos --->nada
    var respuestaForEach = arregloEstudiantes.forEach(function (ValorActual, indice, arreglo) {
    }, console.log(ValorActual.nota));
    console.log(respuestaForEach); //-->undefined
}
main();
