// 02-crud.ts create read update delete
// const prompts = require('prompts');
import * as prompts from './node_modules/prompts';
import { RespuestaEdad } from './interfaces/respuesta-edad.interface';
import { RespuestaNombre } from './interfaces/respuesta-nombre.interface';

function main(){
    //Los lenguajes de programación asíncronos se basan en llamadas
    // que pueden ser cumplidas ahora o en un futuro. Es decir,
    // las variables pueden ser llenadas
    // o asignadas en cualquier momento de la ejecución del programa.
    //síncronos. Es decir, una orden solo se puede ejecutar
    // luego que se ejecuta la anterior.
    // Esto es muy beneficioso para el programador,
    // debido a que no tiene que preocuparse de cuando los datos estarán listos
    // El problema de estos tipos
    // de lenguajes es que los procesos ocupan más memoria, y son menos eficientes.

    // npm uninstall -g tsc -> WINDOWS
    // npm uninstall -g typescript -> WINDOWS
    // npm install -g typescript -> WINDOWS
    // sudo npm uninstall -g tsc -> LINUX O MAC
    // sudo npm install -g typescript -> LINUX O MAC

    // obtenerDatosAnimalPerrito(); // Asincrona
    obtenerDatosAnimalPerritoSincrono().then().catch(); 
    // -> PROMESA // ASincrona
}

//paradigma de programacion
// asincrona
async function obtenerDatosAnimalPerritoSincrono(){
    console.log('Inicio');
    const preguntas = [
        {
            type: 'number',//-->Un Objeto
            name: 'edad',
            message: 'Puedes darme tu edad?'
        },
        {
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        },
        { 
            type: 'text',
            name: 'cedula',
            message: 'Puedes darme tu cedula?'
        }
    ]
    const respuestaEdad = await prompts(preguntas); 
    console.log('Respuesta', respuestaEdad);
    console.log('Fin');
}

//asincrona sin atajos

function obtenerDatosAnimalPerrito(){
    // Paradigma de programacion
    // SINCRONO vs ASINCRONO
    console.log('Inicio');
    const promesaEdad = prompts({ // Esto es una PROMESA
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
      });
    console.log(promesaEdad);
    promesaEdad
        .then( // debo poner esto para cumplir o no cumplir la promesas
          (datos)=>{
              console.log('datos',datos); // AQUI PUEDO SEGUIR
              ////
                const promesaNombre = prompts({ // PROMESA
                    type: 'text',
                    name: 'nombre',
                    message: 'Puedes darme tu nombre?'
                });
                promesaNombre
                    .then( // OK
                        (datosNombre)=>{
                            console.log('Nombre', datosNombre); // AQUI PUEDO SEGUIR
                        }
                    )
                    .catch( // =( 
                        (error)=>{
                            console.log('Error',error);
                        }
                    );
              ///
          }
        )
        .catch( // =( 
            (error)=>{
                console.log('Error',error);
            }
        );
    
    console.log('Fin');
}
main();


