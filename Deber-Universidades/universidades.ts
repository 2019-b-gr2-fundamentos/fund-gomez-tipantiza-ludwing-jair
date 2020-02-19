// Crear, borrar actualizar, buscar
import * as  prompts from './node_modules/prompts';
import { formatoUni } from './interfaces/formatocincomejoresuniversidades.interface';
import { leerArchivo } from '../Clases/07-Archivos/02-leer-archivo';
import { escribirArchivo } from '../Clases/07-archivos/03-escribir-archivo';


let id=0;
const contenidoArchivo= leerArchivo('./mejoresU.txt');
let arregloUniversidadesCargadoArchivo=JSON.parse(contenidoArchivo)
let id1=0;
arregloUniversidadesCargadoArchivo
        .forEach(
            function(valorActual){
                const idActual = valorActual.Id;
                if(idActual > id1){
                    id1 = idActual;
                }
            }
        );
    id1 = id1 + 1;
            id = id1;

let bestUniverS5: formatoUni[] =arregloUniversidadesCargadoArchivo;

function main(){
    mejoresUniversidades().then().catch();}

async function mejoresUniversidades() { 
    const ingresandoDatosUni = [
        {
            type: 'text',
            name: 'Nombre',
            message: 'Ingresa el nombre de la Universidad:',
        },
        {
            type: 'number',
            name: 'NumeroEst',
            message: 'Ingresa el numero de estudiantes de la universidaad: ',

        },
        {
            type: 'number',
            name: 'AnioFund',
            message: 'Ingresa el año de fundacion de la universidad:',
        },
        {
            type: 'text',
            name: 'LugarDondeBebenLosEst',
            message: 'Ingresa en el lugar mas cerca donde ingieren alcholo sus estudiantes:',
        },
        {
            type: 'text',
            name: 'LugarUbi',
            message: 'Ingresa en que ciudad esta ubicada:',
        }
    ];
    const respuestas = await prompts(ingresandoDatosUni);
    const uniIngresada= 
    {Id:id,Nombre: respuestas.Nombre, NumeroEst: respuestas.NumeroEst,AnioFund: respuestas.AnioFund,
        LugarDondeBebenLosEst: respuestas.LugarDondeBebenLosEst,LugarUbi:respuestas.LugarUbi };
        id=id+1
        
        bestUniverS5.push(uniIngresada);
        console.log('Tus universidades son',bestUniverS5);
        const arregloParseado = JSON.stringify(bestUniverS5);
        escribirArchivo('./mejoresU.txt', arregloParseado);
        preguntarUsuario().then().catch()
}
async function preguntarUsuario(){
    
    const decision = await prompts(
        {
            type: 'number',
            name: 'siono',
            message:'PRESIONA\n0-->Agregar mas universidades\n1-->Editar tus universidades\n2--->Eliminar una universidad\n3-->Salir'
        }
    )
    if(decision.siono==0){
        mejoresUniversidades().then().catch();
        
    }else if(decision.siono==1){
        menuEditar().then().catch();
    }else if(decision.siono==2){
        eliminarRegistro().then().catch();
    }else if(decision.siono==3){
        console.log('ADIOOOOOOS PRRRO')
    }

async function menuEditar(){
    const IdAEditar = await prompts({
    type: 'number',
    name: 'Id',
    message: 'Ingrese el Id de la U cuya informacion desea editar'
});
const AidEncontrado = bestUniverS5.findIndex(
    function(valorActual){
    return valorActual.Id == IdAEditar.Id
    }
);
const queVaAEditar = await prompts({
    type: 'text',
    name: 'campoAEditar',
    message: '¿Que campo desea editar,debe escribir el campo tal cual esta en su pantalla?'
});
const respuestaCampo = queVaAEditar.campoAEditar;
if(respuestaCampo == 'Nombre'){
    const nuevoNombre = await prompts({
        type: 'text',
        name: 'nuevoNombre',
        message: 'Ingrese el nombre de la U'
    });
    bestUniverS5[AidEncontrado].Nombre = nuevoNombre.nuevoNombre;
}else if(respuestaCampo == 'NumeroEst'){
    const nuevonNumeroEst = await prompts({
        type: 'number',
        name: 'nuevosEs',
        message: 'Ingrese el numero de estudiantes real'
    });
    bestUniverS5[AidEncontrado].NumeroEst = nuevonNumeroEst.nuevosEs;
}else if(respuestaCampo == 'AnioFund'){
    const nuevoAño = await prompts({
        type: 'number',
        name: 'añoFundacionNue',
        message: 'Ingrese el nuevo año de fundacion'
    });
    bestUniverS5[AidEncontrado].AnioFund = nuevoAño.añoFundacionNue;
}else if(respuestaCampo == 'LugarDondeBebenLosEst'){
    const nuevoLugar= await prompts({
        type: 'text',
        name: 'nuevoBar',
        message: 'Ingrese el nuevo bar a donde van a beber'
    });
    bestUniverS5[AidEncontrado].LugarDondeBebenLosEst = nuevoLugar.nuevoBar;
}else if(respuestaCampo == 'LugarUbi'){
    const nuevaCiudad = await prompts({
        type: 'text',
        name: 'City',
        message: 'Ingrese la nueva ciudad'
    });
    bestUniverS5[AidEncontrado].LugarUbi= nuevaCiudad.City;
}else{
    console.log('Ingrese un campo valido');
};
console.log('El registro de tus mejores universidades:',bestUniverS5);
const nuevoRegistroStringificado = JSON.stringify(bestUniverS5);
escribirArchivo('./mejoresU.txt', nuevoRegistroStringificado);
preguntarUsuario().then().catch();
return bestUniverS5
};

async function eliminarRegistro(){
    const AidAEliminar = await prompts({
    type: 'number',
    name: 'Id',
    message: 'Ingrese el id de la Universidad a eliminar'
});
const AidEncontrado = bestUniverS5.findIndex(
    function(valorActual){
    return valorActual.Id == AidAEliminar.Id
    }
);
bestUniverS5.splice(AidEncontrado, 1);
console.log('La mejores son:', bestUniverS5);
const registroBorrado = JSON.stringify(bestUniverS5);
escribirArchivo('./mejoresU.txt', registroBorrado);
preguntarUsuario().then().catch();
return bestUniverS5
}}
    
main();