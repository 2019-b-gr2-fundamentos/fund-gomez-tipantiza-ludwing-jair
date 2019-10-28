//04-variables.ts
const casado = true;
if (casado == true){
    console.log("si estoy casado");
} else {
    console.log("No estoy casado");
} 

if (casado == false){  // Expresión--> boolean
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
} 

if (casado != true){  
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
} 

if (casado != false){  
    console.log("No estoy casado");
} else {
    console.log("Si estoy casado");
} 

const tengoMosa = false
const estaCasado = casado == true;
const soyMosero = tengoMosa == true;
cosnt casadoyMosero = estaCasado && soyMosero;
if(casadoyMosero){
    console.log("Casado y mosero");
} else {
    console.log("O casado o Mosero o Nada")
}
//AND ---> && ----> Ampers
// TRUE Y TRUE TRUE
// TRUE Y FALSE FALSE
// TRUE Y FALSE FALSE
//FALSE Y FALSE FALSE
//OR --->||--> PIPES¬¬¬
// TRUE Y TRUE TRUE
//TRUE Y FALSE = TRUE
// FALSE Y TRUE = TRUE
// FALSE FALSE = FALSE



// apago la primera alarma me hago
//bolita y lloro hasta la segunda
// alarmaa y me levanto
//celularDescargado
//amaneceMuerto
//estaActivadoLaAlarma
//estaEnModoSilencio
 