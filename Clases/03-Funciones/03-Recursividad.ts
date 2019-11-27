function imprimirMensajeNVeces(
    mensaje: string,
    numeroVeces: number
): void{
    if(numeroVeces == 0){
        console.log('Se termino');
    }else{
        console.log(mensaje);
        const nuevoNumeroVeces = numeroVeces - 1;
        imprimirMensajeNVeces(mensaje, nuevoNumeroVeces);
    }
}
 
function main(){
    imprimirMensajeNVeces('hola',3);
}
 
main();

const arreglo =[1,2,3,4,5,6,7]
function detenerElArreglo(){
    





}