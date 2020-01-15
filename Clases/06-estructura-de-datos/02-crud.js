//02-crus.ts create read update delete
//const prompts=require('prompts');
var prompts = require('prompts');
prompts;
function main() {
    obetenerDatosAnimalPerrito();
}
function obetenerDatosAnimalPerrito() {
    //paradigma de programaacion
    //SINCRONO VS ASINCRONO
    console.log('Inicio');
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    });
    console.log(promesaEdad);
    promesaEdad
        .then(function (datos) {
        console.log('datos', datos); //AQUI PUEDO SEGUIR
        //
        //
        //
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        });
        console.log(promesaNombre);
        promesaNombre
            .then(function (datosNombre) {
            console.log('nombre', datosNombre);
        });
    })
        .catch(function (error) {
        console.log('Error', error);
    });
    console.log('fin');
}
main();
