/* para qque sirve indexof encontrar el elemento
/*const arregloMatriz=[
    [1,2],
    [3,4,5],
    [6,7,8],
    [9],1]*/
    //|en la funcion es un "0" 

function compararMatriz(matrizUno:number[][],matrizDos:number[][]):boolean{

    return true;
}
function mainArreglo(){
    compararMatriz()
}
function obtenerPimeraDivision(matrizUno:Number[][]):number|false{
    const esValido= verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
         const primeraDimensionArreglo = matrizUno.length;
         return primeraDimensionArreglo;//Todo lo que esta escrito despues de un return ya no se ejecuta
}else{
    return false;
}}


function obtenerSegundaDivision(matrizUno:Number[][]):number|false{
    const esValido=verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    let longitudActualMaxima=0;//Auxiliar
    let longitudActualMinima=-1;//Auxiliar

    for(let i=0;i < matrizUno.length;i ++){
        const elementoActual=matrizUno[i];//arreglo
        const longitudActual=elementoActual.length//segunda dimension
        if(longitudActualMaxima<longitudActual){
            longitudActualMaxima=longitudActual;
        }
        if(longitudActualMinima == -1){
            longitudActualMinima=longitudActual;
        }
        if(longitudActual<longitudActualMinima &&longitudActualMinima >=0){
            longitudActualMinima=longitudActual;
        }}

    return false;
}
function dimensionesiguales(){

}
function verificarTodosLosElementosDeUnArregloSonArreglo(arreglo:any[]):boolean{
    for(let i=0;i < arreglo.length ;i++){
        const elementoActual=arreglo[i];
        const esUnArreglo=typeof elementoActual =='object'&&
        elementoActual.indexOf; //truty
        if(!esUnArreglo){
            console.log('No es un arreglo')
            return false;
        }

}}