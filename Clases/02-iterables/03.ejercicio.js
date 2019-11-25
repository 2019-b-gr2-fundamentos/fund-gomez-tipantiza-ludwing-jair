// Crear arreglo de 5 elementos
// Cada 2 elemento 1 0 un 0
// Ejmp[0,0,1,1,0]
// Exista al menos un elemento 1
//ej[0,0,0,1] valido
var arreglo = [];
for (var numeroElementosCreados = 0; numeroElementosCreados <= 5; numeroElementosCreados++) {
    var binario = Math.floor(Math.random() * 2);
    arreglo.push(binario);
    console.log('arreglo', arreglo);
}
