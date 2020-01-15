//02-crus.ts create read update delete
//const prompts=require('prompts');
import* as prompts from'prompts';
prompts 
function main(){
obetenerDatosAnimalPerrito();
}
function obetenerDatosAnimalPerrito(){

    //paradigma de programaacion
    //SINCRONO VS ASINCRONO

    console.log('Inicio');
    const promesaEdad=prompts({ //promesa
        type:'number',
        name:'edad',
        message:'Puedes darme tu edad?'
    });
    console.log(promesaEdad)
    promesaEdad
    .then(
        (datos)=>{
            console.log('datos',datos);//AQUI PUEDO SEGUIR
            //
            //
            //
            const promesaNombre=prompts({ //promesa
                type:'text',
                name:'nombre',
                message:'Puedes darme tu nombre?'
            });
            console.log(promesaNombre)
            promesaNombre
            .then(
                (datosNombre)=>{
                    console.log('nombre',datosNombre)})

        }
        )
        .catch(
            (error)=>{
                console.log('Error',error);
            }
        );
        console.log('fin');
main();