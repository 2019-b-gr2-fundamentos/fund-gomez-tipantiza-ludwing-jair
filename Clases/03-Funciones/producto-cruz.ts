ejercicioMatriz();
function ejercicioMatriz():void{
    let producto=0;
    let resultado=0;
    const matrizDos=[[1,2,3,4,9],
                    [5,6,7,8,10]];
    let indiceMatriz=matrizDos[0].length;
    for(let contador=0;contador<matrizDos[0].length;contador++){
        
        indiceMatriz-1;
        producto=matrizDos[0][contador]*matrizDos[1][indiceMatriz];
        resultado=resultado+producto;
    }
    console.log(resultado);
}