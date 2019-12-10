const numeroUnoString = prompt("Ingresa numero 1"); 
const numeroDosString = prompt("Ingresa numero 2"); 
const numeroUno = Number (numeroUnoString)
const numeroDos = Number (numeroDosString);
const operacionString = prompt ("Elije la Operación siguiendo la siguiente notacion 1:suma, 2:resta, 3: Multiplicaion, 4:division")
const operacion = Number (operacionString);

if (operacion == 1 ){
    console.log (numeroUno + numeroDos);
} else {
    if (operacion == 2){
        console.log (numeroUno - numeroDos);
    } else {
        if(operacion == 3){
            console.log (numeroUno * numeroDos);;
        }else{
            if(operacion == 4){
                console.log (numeroUno / numeroDos);
            }else{
                console.log("El numero de la operacion no ha sido definida");
            }
            
        }
    }
}
