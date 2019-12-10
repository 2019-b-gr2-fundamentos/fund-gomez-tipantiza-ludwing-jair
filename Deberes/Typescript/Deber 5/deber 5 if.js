// Deber de IF
var alimentos = prompt(" Ingrese el alimento a consumir,tenemos la opcion de vegetales,carnes o lacteos");
var saluda = "vegetales";
var grasas = "carnes";
var lechee = "lacteos";
if (alimentos == saluda) {
    var cantidadString = prompt(" Ingrese cantidad de kg a consumir ");
    var cantidad = Number(cantidadString);
    if (cantidad >= 200) {
        console.log("Comes la cantidad adecuada");
    }
    else {
        console.log("Deberías consumir mas");
    }
}
else {
    if (alimentos == grasas) {
        var cantidadString = prompt(" Ingrese cantidad de kg a consumir");
        var cantidad = Number(cantidadString);
        if (function (cantidad) { return 100 && cantidad <= 350; }) {
            console.log("Estas comiendo bien");
        }
        else {
            console.log("Estas comiendo mal");
        }
    }
    else {
        if (alimentos == lechee) {
            var cantidadString = prompt(" Ingrese cantidad de kg a consumir ");
            var cantidad = Number(cantidadString);
            if (cantidad <= 45) {
                console.log("Consumes lacteos adecuadamente ");
            }
            else {
                console.log("No debes ingerir muchos lacteos");
            }
        }
        else {
            console.log("String incorrecto");
        }
    }
}
//Deber numero 2
var relacion = prompt(" Ingrese su tiempo de relacion en meses con su pareja");
var relationship = Number(relacion);
if (relationship > 0 && relationship <= 3) {
    console.log("La pareja que tienes todavia cuenta como vacile");
}
else {
    if (relationship > 3 && relationship <= 12) {
        console.log("Estas en el sendero de amor <3");
    }
    else {
        if (relationship > 12 && relationship <= 36) {
            console.log("Eso ya va encerio :O");
        }
        else {
            if (relationship > 36) {
                console.log("ya casate");
            }
            else {
                console.log('no tienes novia');
            }
        }
    }
}
//Deber numero 3 if
var nota = prompt(" Ingrese su nota del primer bimestre");
var bimes = Number(nota);
if (bimes == 0) {
    console.log('Si le metes ganas,a lo mucho llegas al suple.Probablemente te jales #Todosegunda');
}
else {
    if (bimes > 0 && bimes <= 5) {
        console.log('Metele mas Ganas para que lleges al menos al supletorio');
    }
    else {
        if (bimes > 5 && bimes <= 7) {
            console.log('Metele mas ganas que si le pasas');
        }
        else {
            if (bimes > 7 && bimes <= 9) {
                console.log('Vas bien no te confies');
            }
            else {
                if (bimes > 9 && bimes <= 10) {
                    console.log('Confiate prro');
                }
                else {
                    console.log('Numero invalido ');
                }
            }
        }
    }
}
