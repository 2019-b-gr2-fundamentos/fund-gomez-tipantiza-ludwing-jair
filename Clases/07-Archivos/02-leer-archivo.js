"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivo(path, string) {
    var resultado = fs.readFileSync(path, //PATH
    'utf-8' //CODIFICACION depende del pais en que nos enconramos+
    );
    return resultado;
}
exports.leerArchivo = leerArchivo;
