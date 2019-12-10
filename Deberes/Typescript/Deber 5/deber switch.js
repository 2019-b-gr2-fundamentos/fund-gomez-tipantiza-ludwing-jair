//Ejercicio 1
var x = Number(prompt("Inserte la componente en x del vector"));
var y = Number(prompt("Inserte la componente en y del vector"));
var decision = prompt("¿Desea calcular el modulo o el angulo de un vector?");
switch (decision) {
    case ("modulo"):
        console.log(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
        break;
    case ("angulo"):
        console.log(Math.atan(y / x) * 180 / Math.PI);
        break;
    default:
        console.log("String no valido");
}
//Ejemplo numero 2
var HerramientaFerreteria = prompt("Ingrese la herramienta a comprar.Disponemos de martillos,cemento y clavos");
var herra1 = "martillo";
var herra2 = "cemento";
var herra3 = "clavos";
switch (HerramientaFerreteria) {
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
        console.log('No disponemos de otra herramienta por el momento');
}
//Ejercicio 3
var mesString = prompt("Ingrese un mes del año");
var mes = (mesString);
var A = "tiene 31 días";
var B = "tiene 30 días";
var C = "tiene 28 días";
switch (mes) {
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
