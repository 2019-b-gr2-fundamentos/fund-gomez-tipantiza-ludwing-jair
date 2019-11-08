//Ejercicio 1

const x = Number(prompt("Inserte la componente en x del vector")) ;
const y = Number(prompt("Inserte la componente en y del vector"));

const decision = prompt("¿Desea calcular el modulo o el angulo de un vector?")
switch (decision){
    case ("modulo"):
        console.log(Math.sqrt(Math.pow(x,2)+Math.pow(y,2))) 
        break;
    case ("angulo"):
        console.log(Math.atan(y/x)*180/Math.PI) 
        break;
    default:
        console.log("String no valido")
}
//Ejemplo numero 2
const HerramientaFerreteria = prompt("Ingrese la herramienta a comprar.Disponemos de martillos,cemento y clavos");
const herra1 = "martillo";
const herra2 = "cemento";
const herra3 = "clavos";
switch (HerramientaFerreteria){
  case 'martillo':
    console.log('Disponemos martillos de alta calidad y de baja calidad su precio varia entre 1.50$ y 3$');
    break;
  case 'cemento':
  console.log('Disponemos de cemento Rocafuerte el precio es 7$');
  break;
  case 'clavos':
    console.log('Los clavos de 3 pulgadas estan a 2$ la libra');
    break;
  default:
      console.log('No disponemos de otra herramienta por el momento')
    }
    
//Ejercicio 3

const mesString = prompt("Ingrese un mes del año");
const mes =(mesString);
const A = "tiene 31 días";
const B = "tiene 30 días";
const C = "tiene 28 días";
switch(mes){
    case "enero":
        console.log(mes, A);
        break;

    case "febrero":
        console.log(mes, C);
        break;

    case "marzo":
        console.log(mes, A);
        break;

    case "abril":
        console.log(mes, B);
        break;

    case "mayo":
        console.log(mes, A);
        break;

    case "junio":
        console.log(mes, B);
        break;

    case "julio":
        console.log(mes, A);
        break;

    case "agosto":
        console.log(mes, A);
        break;

    case "septiembre":
        console.log(mes, B);
        break;

    case "octubre":
        console.log(mes, A);
        break;

    case "noviembre":
        console.log(mes, B);
        break;

    case "diciembre":
        console.log(mes, A);
        break;

    default:
        console.log("El string ingresado no es un mes");
        break;
}
