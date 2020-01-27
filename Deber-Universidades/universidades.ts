// Crear, borrar actualizar, buscar
import * as  prompts from './node_modules/prompts';
import {leerMejoresUni} from'./leer-archivo';
import { formatoUni } from './interfaces/formatocincomejoresuniversidades.interface';


function main(){
    mejoresUniversidades().then().catch();}

async function mejoresUniversidades() {

    const contenidoPredeterminado= leerMejoresUni('./Mejoresuniversidades.txt');
    const convertirArchivo = JSON.parse (contenidoPredeterminado);
    const bestUniverS5:formatoUni[] = convertirArchivo;

    console.log('Según varios estudios las mejores universidades del Ecuador son las siguientes:\n',bestUniverS5);
    console.log('¿Te animas a completar el top five?')
    const decision = await prompts(
        {
            type: 'number',
            name: 'siono',
            message:'PRESIONA\n0-->SI\n1-->NO,prefiero cantar tusa xd xd '
        }
    )
    if(decision.siono==1){
        console.log('Neta me lo juras?')
        console.log('OK,ADIOS')
    }else if(decision.siono==0){
    
    const ingresandoDatosUni = [
        {
            type: 'text',
            name: 'Nombre',
            message: 'Ingresa el nombre de la Universidad:',
        },
        {
            type: 'number',
            name: 'NumeroEst',
            message: 'Ingresa el numero de estudaiantes de la universidaad: ',

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
    ]
    const respuestas = await prompts(ingresandoDatosUni);
    const uniIngresada:formatoUni = 
    { Nombre: respuestas.Nombre, NumeroEst: respuestas.NumeroEst,AnioFund: respuestas.AnioFund,
        LugarDondeBebenLosEst: respuestas.LugarDondeBebenLosEst,LugarUbi:respuestas.LugarUbi }
        
        bestUniverS5.push(uniIngresada);

    console.log('Venga,has ingresado ya,la  universidad que faltaba',bestUniverS5);

    const preguntarSiOcurrioAlgunError = await prompts(
        {
            type: 'number',
            name: 'Error',
            message:'PRESIONA\n1-->editar datos de tu universidad\n2-->eliminar tu universidad\n3--->Salir' 
        }
    )
    
    if(preguntarSiOcurrioAlgunError.Error == 1){
        console.log('Ahora trataremos de solucionar este error');

    const nombreUniversidadAEditar: string[] = [bestUniverS5[0].Nombre, bestUniverS5[1].Nombre, bestUniverS5[2].Nombre,bestUniverS5[3]];
    console.log(nombreUniversidadAEditar);

            const buscarUnversidad= await prompts(
                {
                    type: 'text',
                    name: 'Nombre',
                    message: '\nNombre de la Universidad a editar?:'
                }
            );
        
            const posicionUniMalTipada = bestUniverS5.findIndex(
                function(valorActual){
                    return valorActual.Nombre == buscarUnversidad.Nombre; 
                }  
            );        
            const datosNuevoDeUniversidadaMalTipada= [
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
                    message: 'Ingresa en el lugar mas cerca donde ingieren alcohol sus estudiantes:',
                },
                {
                    type: 'text',
                    name: 'LugarUbi',
                    message: 'Ingresa en que ciudad esta ubicada:',
                }
            ]
            const respuestasUniversidadEditada = await prompts(datosNuevoDeUniversidadaMalTipada);
            
            const definitivoUniversidadEditada:formatoUni= { Nombre: respuestasUniversidadEditada.Nombre,NumeroEst: respuestasUniversidadEditada.NumeroEst,
                AnioFund: respuestasUniversidadEditada.AnioFund,LugarDondeBebenLosEst: respuestasUniversidadEditada.LugarDondeBebenLosEst,
                LugarUbi:respuestasUniversidadEditada.LugarUbi 
        
            }
        
            bestUniverS5[posicionUniMalTipada] =definitivoUniversidadEditada;
        
            console.log('Esperemos que no te hayas equivocado esta vez');
            console.log('tu top five es',bestUniverS5)

    }else if(preguntarSiOcurrioAlgunError.Error == 2){
        console.log("Entendemos que para ti solo hay 4 mejores universidades,procedermos a eliminar tu universidad")
        bestUniverS5.pop();
        console.log(bestUniverS5);
        console.log('Ahora hemos eliminado tu universidad :C')
    }else if(preguntarSiOcurrioAlgunError.Error == 3){
        console.log('Me siento muy feliz de tu elección')

    }
}
}

main();