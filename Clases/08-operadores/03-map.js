export function map(arreglo, numero, funcion) {
    const arregloMapeado = [];
    for (let i = 0; i < arreglo.length; i++) {
        const respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == true) {
            const arregloNuevo = (arregloMapeado.push(arreglo[i]) * (numero));
        }
    }
    return arregloMapeado;
}
