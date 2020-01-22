
import*as fs from 'fs';
export function leerArchivo(path;string):string{ //si pongo async,es cuando convierte a una promesa la funcion y el reultado no devuelve un strirng

const resultado=fs.readFileSync(
path,//PATH
'utf-8'//CODIFICACION depende del pais en que nos enconramos+
);
return resultado;

}
