// Crear arreglo de 5 elementos
// Cada 2 elemento 1 0 un 0
// Ejmp[0,0,1,1,0]
// Exista al menos un elemento 1
//ej[0,0,0,1] valido


const arreglo=[];
for(let numeroElementosCreados = 0;numeroElementosCreados <= 5; numeroElementosCreados++)
{
    const binario=Math.floor(Math.random()*2);//[0,2[
    arreglo.push(binario);
    console.log('arreglo',arreglo);
}
if(arreglo.includes("1"))
console.log(" ");else{
for(let numeroElementosCreados=1;numeroElementosCreados<=2;numeroElementosCreados++)
{
    const binario=Math.floor(Math.random()*2);//[0,2[
    arreglo.push(binario);
    console.log('arreglo',arreglo);
}}

/*definimos el numero de  jugadores a continuación asignamos randomicamente si tiene o no un floron,verificamos si al menos si existe un floron 
si no es asi,pues creamos otro floron para al final adivinar donde esta el floron*/



let arregloFloron=[0,0,0,0,1];
let existeFloron= false;

for(let i=0;i<5 , i++){
    let exitseFloron=false;
     if(  arregloFloron[i]== 1{
         existeFloron= true;
     }
    }
    if(existeFloron){
        console.log('adivinar')
    }else{
        console.log('Asignar y luego adivinar')
    }