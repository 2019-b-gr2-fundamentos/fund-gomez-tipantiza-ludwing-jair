// Deber de IF
const alimentos = prompt(" Ingrese el alimento a consumir ");
const saluda = "vegetales";
const grasas = "carnes";
const lechee = "lacteos";
if (alimentos == saluda) {
    const cantidadgrString = prompt(" Ingrese cantidad de kg a consumir ");
    const cantidad = Number(cantidadgrString);
    if (cantidad >= 200) {
    console.log("Comes la cantidad adecuada");
    } else {
        console.log("Deberías consumir mas")
    }
} else {
    if (alimentos == grasas) {
        const cantidadString = prompt(" Ingrese cantidad de kg a consumir ");
        const cantidad = Number(cantidadString);
        if (cantidad >= 100 && cantidad <= 350 ) {
            console.log("Estas comiendo bien");
            } else {
                    if (alimentos== lechee ) {
                        const cantidadString = prompt(" Ingrese cantidad de kg a consumir ");
                        const cantidad = Number(cantidadString);
                        if (cantidad <= 45 ) {
                            console.log("Consumes lacteos adecuadamente ");
                            } else {
                                console.log("No debes ingerir muchos lacteos")
                            } 
                    }
                }
            }
        }
//Deber numero 2
const relacion = prompt(" Ingrese su tiempo de relacion en meses");
const relationship = Number(relacion);
if (relationship<= 3) {
    console.log("Todavia cuenta como vacile");
    } else {
    if (relationship >3 && relationship <=12) {
        console.log("Estas en el sendero de amor");
    } else {
        if (relationship >12 &&relationship <= 36 ) {
            console.log("eso ya va encerio");
            } else {
                    if (relationship >  36  ) {
                            console.log("ya casate");
                    
                    }
                }
            }
            }
     //Deber numero 3 if
     const nota = prompt(" Ingrese su nota bimestral ");
const bimes = Number(nota);
if (bimes =0) {
    console.log("Solo puedes llegar al supletorio si le metes ganas");
    } else {
    if (bimes > 0 && bimes <= 6) {
        console.log("si sigues en el mismo nivel llegaras al supletorio");
    } else {
        if (bimes > 6 && bimes <= 9) {
            console.log("sigue en el mismo nivel si le pasas");
            } else {
                    if (bimes >9 && <=10 ) {
                            console.log("No te confies,pero ya estas al otro lado");
                            }
                    }
                }
            }
