// Crear arreglo de 5 elementos
// Cada 2 elemento 1 0 un 0
// Ejmp[0,0,1,1,0]
// Exista al menos un elemento 1
//ej[0,0,0,1] valido


const arreglo=[];
let verificacion=0;
const jugadores=5;
for(let numeroElementosCreados = 0;numeroElementosCreados <=jugadores;numeroElementosCreados++)
{
    const binario=Math.floor(Math.random()*2); //[0,2]
    arreglo.push(binario);
}
for(let posicionFloron=0;posicionFloron<jugadores;posicionFloron++){
    if(arreglo[posicionFloron]=1){
        console.log(arreglo)
    }else{
        

}
//minimo dos for para ve si hay un cero o no 