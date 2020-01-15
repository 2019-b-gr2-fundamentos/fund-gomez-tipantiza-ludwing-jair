//02-crus.ts create read update delete
//const prompts=require('prompts');
import*as prompts from'prompts';
prompts 
function main(){
obetenerDatosAnimalPerrito();
}
function obetenerDatosAnimalPerrito(){

    //paradigma de programaacion
    //SINCRONO VS ASINCRONO

    console.log('Inicio')
    const edad)prompts({
        type:'number',
        name:'edad',
        message:'Puedes darme tu edad?'
    })
    //.then((datos)=>{console.log('datos',datos)});})
    console.log(edad)



    console.log('fin')
}
main();