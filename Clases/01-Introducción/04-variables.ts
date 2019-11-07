//04-variables.ts
const casado = true;
if (casado == true){
    console.log("si estoy casado");
} else {
    console.log("No estoy casado");
} 

if (casado == false){  // Expresión devuelve--> boolean
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
    console.log("Si estoy casado");
} else {
    console.log("No estoy casado");
} 

const tengoMosa = false;

if (casado == true && tengoMosa == True ){  
    console.log("Casado y Mosero");
} else {
    console.log("O casado o Mosero o Nada ");
} 
const estaCasado = casado == true;
const soyMosero = tengoMosa == true;
const casadoyMosero = casado == true && tengoMosa = true;
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
//estaActivadoLaAlarma  != true
//estaEnModoSilencio     == true
//const seAtrasoAClase = celularDescargado == true

//
const seAtrasoAClase = celularDescargado ==true || celularDañado ==true ||  amaneceMuerto ==true || estaActivadaLaAlarma != true || estaEnModoSilencio ==true;

if(seAtrasoAClase){}



//Llego tarde a clases si es que el celular esta descargado o dañado o no esta activada la alarma o esta en modo silencio o por ultimo amanezco muerto

//----------------------------------------------------------------------------------------

//TRUTY
const nombreVacio = "";
if(""){
    console.log("Truty");
}else{
    console.log("Falsy");
}

const nombreVacio = "abc";
if("abc"){
    console.log("Truty");
}else{
    console.log("Falsy");
}


if("-1"){
    console.log("Truty");
}else{
    console.log("Falsy");
}


if("1.2"){
    console.log("Truty");
}else{
    console.log("Falsy");
}


if(0){
    console.log("Truty");
}else{
    console.log("Falsy"); 
} // falsy

if(null){
    console.log("Truty");
}else{
    console.log("Falsy");
} // falsy

if(undefined){
    console.log("Truty");
}else{
    console.log("Falsy");
} // falsy


const calculo = "sumar"
switch(calculo){

    case "sumar":   
        //Codigo
        break;
    case "restar":   
        //Codigo  
        break;
    case "multiplicar": 
        //Codigo 
        break;
    case  "dividir" :
        //Codigo 
        break;
    default:
}





const edadString = prompt ("Ingresar numero")
const edad = Number (edadString); // sumar restar multiplicar dividir 
switch(edad){



// switch sirve para caso especificos 





                    
const edadString =  prompt ( " Ingrese su edad " )
const edad = Number( edadString );
if ( edad  >= 0  &&  edad <= 6) {
console.log ( " Usted es un guagua " );
} else  if ( edad  > 6  &&  edad <= 18 ) {
console.log( " Usted es un guambra " );
} else  if ( edad > 18  &&  edad <= 65 ) {
console.log (  "Usted es un Longo " );
} else  if ( edad > 65  &&  edad <= 100 ) {
console.log ( " Usted es un Ruku " );}
else{
    console.log("Usted aun no nace");
}    

