function sumar(numUno, numDos) {
    return numUno + numDos;
}
function restar(numUno, numDos) {
    return numUno - numDos;
}
function multiplicar(numUno, numDos) {
    return numUno * numDos;
}
function dividir(numUno, numDos) {
    return numUno / numDos;
}
function main() {
    calculadora(); /* buena practica que main no tenga muchas palabras*/
}
function calculadora() {
    var operacion = prompt('Selecciona una operación:"suma-1","resta-2","multiplicacion-3","division-4","terminamos-5"');
    var esSuma = operacion == 'suma' || operacion == '1' || operacion == 'suma-1';
    var esResta = operacion == 'resta' || operacion == '2' || operacion == 'resta-2';
    var esMultiplicacion = operacion == 'multiplicacion' || operacion == '3' || operacion == 'multiplicacion-3';
    var esDivision = operacion == 'Division' || operacion == '4' || operacion == 'Division-4';
    var seTermino = operacion == 'Terminanos' || operacion == '5' || operacion == 'Terminamos 5';
    var estValida = esSuma || esResta || esMultiplicacion || esDivision ||
    ;
    if (estValida) {
        var numUno = +prompt("Number 1");
        var numDos = +prompt("Number 2");
        var resultado = 0;
        if (esSuma) {
            resultado = sumar(numUno, numDos);
        }
        if (esResta) {
            resultado = restar(numUno, numDos);
        }
        if (esMultiplicacion) {
            resultado = multiplicar(numUno, numDos);
        }
        if (esDivision) {
            resultado = dividir(numUno, numDos);
        }
        console.log(resultado);
        calculadora();
    }
    else {
        if (seTermino) {
            console.log("Adios :'(");
        }
        else {
            calculadora();
        }
    }
}
/*
  1)Seleccion Operacion
  2.1) La seleccion no es valida
  2.11)Vuelve a seleccionar la operacion
  2.2) La seleccion es Valida
  2.2.1)Ingresa primer numero
  2.2.2)Ingresa segundo numero
  2.2.3)Ejecutar la operaion */
/* Funciones recursiva se llamabaan asi mismo
y tiene que acabar en un punto y es cuando cumple la condicion
*/ 
