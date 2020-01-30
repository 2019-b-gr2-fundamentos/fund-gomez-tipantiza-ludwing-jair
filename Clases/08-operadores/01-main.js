<<<<<<< HEAD
import { filter } from "./02-filter";
import { map } from "./03-map";
function main() {
    const arregloEstudiantes = [
        { id: 1, nombre: 'Adrian', nota: 7 },
        { id: 2, nombre: 'Vicente', nota: 9 },
        { id: 3, nombre: 'Wendy', nota: 4 },
        { id: 4, nombre: 'Carolina', nota: 10 },
        { id: 5, nombre: 'Carlos', nota: 6.5 },
    ];
    // OPERADOR - FOREACH
    //ENVIAMOS -> NADA
    //RECIBIMOS -> NADA
    const respuestaForeach = arregloEstudiantes
        .forEach(function (valorActual, indice, arreglo) {
        console.log(valorActual.nota);
    });
    console.log(respuestaForeach); // undefined 
    //Map -> Transformar el arreglo (Mutas el arreglo)
    //ENVIAMOS -> valorActual modificado
    //Recibir -> Nuevo arreglo con valores modificados
    const respuestaMap = arregloEstudiantes
        .map(function (valorActual, i, arreglo) {
        const nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    console.log('Respuesta MAP', respuestaMap);
    console.log('arreglo estudiantes', arregloEstudiantes);
    //Filter -> filtra el arreglo
    //ENVIAMOS -> CONDICION
    //RECIBIR -> Nuevo arreglo con valores filtrados
    const respuestaFilter = arregloEstudiantes
        .filter(function (valorActual, i, arreglo) {
        const condicion7 = valorActual.nota >= 7;
        const condicion5 = valorActual.nota < 5;
        //condicion es un truty
        return condicion7 || condicion5;
    });
    console.log('respuestaFilter,', respuestaFilter);
    console.log('arregloEstudiantes', arregloEstudiantes);
    //AND -> every ( todos cumplan) / OR solo uno cumpla
    //Some -> Devuelve verdadero o falso dependiendo de la cond.
    // Si alguno cumple Devuelve TRUE
    // Si ninguno cumple devuelve FALSE
    // ENVIAMOS -> Condicion
    // RECIBIMOS -> Booleano
    const respuestaSome = arregloEstudiantes
        .some(function (valorActual, i, arreglo) {
        const condicion = valorActual.nota < 4;
        // CONDICION TRUTY O TRUE
        return condicion;
    });
    console.log('respuestaSome', respuestaSome);
    console.log('respuestaEstudiantes', arregloEstudiantes);
    //Every -> Devuelve verdadero o falso dependiendo de la cond.
    // Si todos cumplen la cond TRUE
    // Si alguno no cumple la condicion FALSE
    // ENVIAMOS -> Condicion
    // RECIBIMOS -> Booleano
    const respuestaEvery = arregloEstudiantes
        .every(function (valorActual, i, arreglo) {
        const condicion = valorActual.nota >= 4;
        // CONDICION TRUTY O TRUE
        return condicion;
    });
    console.log('respuestaEvery', respuestaEvery);
    console.log('respuestaEstudiantes', arregloEstudiantes);
    //Reduce -> devuelve un valor con el calculo aplicado
    //ENVIAMOS -> CALCULO
    //RECIBIR -> VALOR
    const respuestaReduce = arregloEstudiantes
        .reduce(function (acumulador, valorActual) {
        const calculo = acumulador - valorActual.nota;
        return calculo;
    }, 100 //valor inicial del acumulador
    );
    console.log('respuestaReduce', respuestaReduce);
    console.log('promedio', respuestaReduce / arregloEstudiantes.length);
    console.log('respuestaEstudiantes', arregloEstudiantes);
    const respuestaFilterNuestro = filter(arregloEstudiantes, function (valorActual, i, arr) {
        console.log('valor:', valorActual);
        console.log('Indice:', i);
        console.log('arreglo:', arr);
        return valorActual.nota >= 7;
    });
    console.log('respuestaFilterNuevo', respuestaFilterNuestro),
        console.log('arregloEstudiantes', arregloEstudiantes);
    const respuestaMapNuestro = map(arregloEstudiantes, 9, function (valorActual, i, arry) {
        console.log('valor:', valorActual);
        console.log('arreglo:', arry);
        console.log('Indice:', i);
        return valorActual.nota >= 7;
        return valorActual.nota * 9;
    });
    console.log('respuestaMapNuevo', respuestaMapNuestro),
        console.log('arreglo estudiantes', arregloEstudiantes);
=======
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
>>>>>>> desarrollo
}
main();
