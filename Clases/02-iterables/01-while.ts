
let vecesQueHeComido = 0;
do{    
    console.log('vamos a comer');
    vecesQueHeComido = vecesQueHeComido + 1
    switch (vecesQueHeComido) {
        case 1: 
          console.log('desayuno');
            break;
        case 2:
            console.log('almuerzo');
              break;
        case 3:
            console.log('merienda');
             break;   
        default:
          console.log('gorditos');
          break
      }
} while (vecesQueHeComido < 3 ){



  vecesQueHeComido = 0
    switch (vecesQueHeComido) {
        case 1: 
          console.log('desayuno');
            break;
        case 2:
            console.log('almuerzo');
              break;
        case 3:
            console.log('merienda');
             break;   
        default:
          console.log('gorditos');
          break
      }
}




/*
1 analisis
2 algebra
3 compiladores
5 program
7  calculo
11 fisica
13 ingles
Si es impar ---> aumentsamos a analisis socioeconomic
si es par ----> aumentamos algebra
si es muñtiplo de 3 ----> aumentamos a compiladores 
1 Analisis  
2 Algebra
3 Compiladores
5 programacion
7 calculo
11 fisica
13 ingles
Si es inpar aumentar a analisis socioeconomico
si es par aumentamos a algebra
si es multiplo de 3 aumentamos a compiladores
*/

let numero = 1;
let Analisis = 0; 
let Algebra = 0;
let Compiladores = 0;
let programacion = 0;
let calculo = 0;
let fisica = 0;
let ingles = 0;


do{
  numero = numero + 1
      if ((numero%13) == 0){
          ingles = ingles + 1   
}else{
      if((numero%11) == 0){
        fisica = fisica + 1
  }else{
       if(numero%7 == 0){
          calculo = calculo + 1
    }else{
        if(numero%5 == 0){
        programacion = programacion + 1
      }else{
        if(numero%3 == 0){
          Algebra = Algebra + 1
        }else{
        if(numero%1 == 0){
            Analisis = Analisis + 1
          }
        }
      }
    }
  }
}

} while (numero <= 1000);

console.log(`la cantida de deberes de ingles fue ${fisica}`);






