import { filter } from "./02-filter";
import { every } from "./03-every";
import { map } from "./05-map";
import { some } from "./04-some";
import { forEach } from "./07-forEach";
import { reduce } from "./06-reduce";

function main(){
    const arregloEstudiantes =  [
        {id:1, nombre:"Jair", nota: 7},
        {id:2, nombre:"Ludwing", nota: 8},
        {id:3, nombre:"Geneis", nota: 9},
        {id:4, nombre:"Gabriela", nota: 5},
        {id:5, nombre:"Eduardo", nota: 4},];
    // OPERADOR FOREACH
    // Enviamos -> NADA
    // Recibimos -> NADA
    const respuestaForEach = arregloEstudiantes.
        forEach(
            function(valorActual, indice, arreglo){
                console.log(valorActual.nota);
            }
        );
    console.log(respuestaForEach); // undefined

    // Map -> Transformar el arrelo (Mutar el arr)
    // Enviamos -> el valorActual modificado
    // Recibimos -> Nuevo arreglo con valores modificados 

    const respuestaMap = arregloEstudiantes
            .map(
                function(valorActual, i, arreglo){
                    const nuevoObjeto = {
                        id:valorActual.id,
                        nombre:valorActual.nombre,
                        nota20: valorActual.nota * 2
                    };
                    return nuevoObjeto;
                }
            );
    console.log('Respuesta MAP:', respuestaMap);
    console.log(arregloEstudiantes);
    
    // filter -> filtra el arreglo
    // Enviamos -> CONDICION
    // Recibimos -> Nuevo arreglo con valores filtrados
    const respuestaFilter =  arregloEstudiantes
            .filter(
                function(valorActual, i, arreglo){
                    const condicion7 = valorActual.nota >= 7;
                    const condicion5 = valorActual.nota < 5;
                    // Condicion es un TRUTY o un TRUE
                    return condicion7 || condicion5;
                }
            );
    console.log('Respuesta Filter:', respuestaFilter);
    console.log('arreglosEstudiante:', arregloEstudiantes);

    // AND -> every (que todos cumplan la condicion) / OR -> some (que uno cumpla)
    
    // Some -> Devuelve verdadero o false dependiendo de la condicion
    //          SI ALGUNO CUMPLE, DEVUELVE TRUE
    //          SI NUNGUNO CUMPLE, DEVUELVE FALSE
    // Enviamos -> CONDICION
    // Recibimos -> BOOLEANO

    const respuestaSome = arregloEstudiantes
                .some(
                    function(valorActual, i, arreglo){
                        const condicion = valorActual.nota >=9;
                        // CONDICION TRUTY O TRUE
                        return condicion;
                    }
                );
    console.log('respuestaSome:', respuestaSome);
    console.log('arregloEstudiantes:', arregloEstudiantes);

    // Some -> Devuelve verdadero o false dependiendo de la condicion
    //          SI TODOS CUMPLE, DEVUELVE TRUE
    //          SI ALGUNO NO CUMPLE, DEVUELVE FALSE
    // Enviamos -> CONDICION
    // Recibimos -> BOOLEANO
    const respuestaEvery = arregloEstudiantes
                .every(
                    function(valorActual){
                        const condicion = valorActual.nota <= 5;
                        return condicion;
                    }
                );
    console.log('respuestaEvery;', respuestaEvery);
    console.log('arrregloEstudiantes', arregloEstudiantes);
    
    // Reduce -> Devuelve un valor con el calculo aplicado (a cada iteracion se le asigna a un calculo)
    // Enviamos -> CALUCLO
    // Recibimos -> VALOR
    const respuestaReduce = arregloEstudiantes
                .reduce(
                    function(acumulador, valorActual, i, arreglo){ // parametros: 1. donde empieza 2. valor
                        const calculo = acumulador - valorActual.nota;
                        return calculo;
                    },
                    100 // valor inicial del acumulador
                );
    console.log('respuestaReduce', respuestaReduce);
    console.log('Promedio:', respuestaReduce / arregloEstudiantes.length);
    console.log('arregloEstudiantes', arregloEstudiantes);






    //------------------------------------------------------------------mio............................//
    const respuestaForEachNuestro = forEach(
        arregloEstudiantes,
        function(valorActual, i, arr){
            console.log(valorActual.nota);
        }
    );
    console.log('respuestaForEachNuestro:', respuestaForEachNuestro);
    console.log('arregloEstudiantes:', arregloEstudiantes);

    const respuestaMapNuestro = map(
        arregloEstudiantes,
        function(valorActual, i, arr){
            return {
                id:valorActual.id,
                nombre:valorActual.nombre,
                nota: valorActual.nota,
                nota20: valorActual.nota * 2
            };
        }
    );
    
    console.log('respuestas Map Casero:', respuestaMapNuestro);
    console.log('arregloEstudiantes:', arregloEstudiantes);

    const respuestaFilterNuestro = filter(
            arregloEstudiantes,
            function(valorActual,i, arr){
                return valorActual.nota >= 8;
            }
        );
    console.log('respuesta Filter Casero:', respuestaFilterNuestro);
    console.log('arregloEstudiantes: ', arregloEstudiantes);


    const respuestaSomeNuestro = some(
        arregloEstudiantes,
        function(valorActual, i, arr){
            return valorActual.nota >= 9;
        }
    );
    console.log('respuesta Some Casero:', respuestaSomeNuestro);
    console.log('arregloEstudiantes:', arregloEstudiantes);


    const respuestaEveryNuestro = every(
        arregloEstudiantes,
        function(valorActual, i, arr){
            return valorActual.nota <= 5;
        }
    );
    console.log('respuesta Every Casero:', respuestaEveryNuestro);
    console.log('arregloEstudiantes:', arregloEstudiantes);


    const respuestaReduceNuestro = reduce(
        arregloEstudiantes,
        function(acumulador, valorActual){
            return acumulador - valorActual.nota;
        }
    );
    console.log('respuesta Reduce Casero:', respuestaReduceNuestro);
    console.log('Promedio:', respuestaReduceNuestro / arregloEstudiantes.length);
    console.log('arregloEstudiantes:', arregloEstudiantes);
};

main();