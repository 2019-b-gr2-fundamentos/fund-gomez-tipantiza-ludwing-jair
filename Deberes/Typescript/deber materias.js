var numeroDeDeberes = 0;
var analisis = 0;
var algebra = 0;
var compiladores = 0;
var programacion = 0;
var calculo = 0;
var fisica = 0;
var ingles = 0;
do {
    numeroDeDeberes = numeroDeDeberes + 1;
    if (numeroDeDeberes % 13 == 0) {
        ingles = ingles + 1; /*Tomamos el inglés como prioridad
        pues si ponemos como prioridad los pares e impares no nos abarcaria los deberes de ingles y
        fuera 500 para aanalisis y 500 para algebra*/
    }
    else if (numeroDeDeberes % 11 == 0) {
        fisica = fisica + 1;
    }
    else if (numeroDeDeberes % 7 == 0) {
        calculo = calculo + 1;
    }
    else if (numeroDeDeberes % 5 == 0) {
        programacion = programacion + 1;
    }
    else if (numeroDeDeberes % 3 == 0) {
        compiladores = compiladores + 1;
    }
    else if (numeroDeDeberes % 2 == 0) {
        algebra = algebra + 1;
    }
    else if (numeroDeDeberes % 2 !== 0) {
        analisis = analisis + 1;
    }
} while (numeroDeDeberes < 1000);
console.log("Hice " + ingles + " deberes de Ingl\u00E9s");
console.log("Hice " + fisica + " deberes de F\u00EDsica");
console.log("Hice " + calculo + " deberes de C\u00E1lculo");
console.log("Hice " + programacion + " deberes de Programacion");
console.log("Hice " + compiladores + " deberes de Compiladores");
console.log("Hice " + algebra + " deberes de Algebra Lineal");
console.log("Hice " + analisis + " deberes de An\u00E1lisis Socioecon\u00F3mico");
