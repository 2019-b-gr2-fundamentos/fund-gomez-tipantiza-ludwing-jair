"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Crear, borrar actualizar, buscar
var prompts = require("./node_modules/prompts");
var _02_leer_archivo_1 = require("../Clases/07-Archivos/02-leer-archivo");
var _03_escribir_archivo_1 = require("../Clases/07-archivos/03-escribir-archivo");
var id = 0;
var contenidoArchivo = _02_leer_archivo_1.leerArchivo('./mejoresU.txt');
var arregloUniversidadesCargadoArchivo = JSON.parse(contenidoArchivo);
var id1 = 0;
arregloUniversidadesCargadoArchivo
    .forEach(function (valorActual) {
    var idActual = valorActual.Id;
    if (idActual > id1) {
        id1 = idActual;
    }
});
id1 = id1 + 1;
id = id1;
var bestUniverS5 = arregloUniversidadesCargadoArchivo;
function main() {
    mejoresUniversidades().then().catch();
}
function mejoresUniversidades() {
    return __awaiter(this, void 0, void 0, function () {
        var ingresandoDatosUni, respuestas, uniIngresada, arregloParseado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ingresandoDatosUni = [
                        {
                            type: 'text',
                            name: 'Nombre',
                            message: 'Ingresa el nombre de la Universidad:',
                        },
                        {
                            type: 'number',
                            name: 'NumeroEst',
                            message: 'Ingresa el numero de estudiantes de la universidaad: ',
                        },
                        {
                            type: 'number',
                            name: 'AnioFund',
                            message: 'Ingresa el año de fundacion de la universidad:',
                        },
                        {
                            type: 'text',
                            name: 'LugarDondeBebenLosEst',
                            message: 'Ingresa en el lugar mas cerca donde ingieren alcholo sus estudiantes:',
                        },
                        {
                            type: 'text',
                            name: 'LugarUbi',
                            message: 'Ingresa en que ciudad esta ubicada:',
                        }
                    ];
                    return [4 /*yield*/, prompts(ingresandoDatosUni)];
                case 1:
                    respuestas = _a.sent();
                    uniIngresada = { Id: id, Nombre: respuestas.Nombre, NumeroEst: respuestas.NumeroEst, AnioFund: respuestas.AnioFund,
                        LugarDondeBebenLosEst: respuestas.LugarDondeBebenLosEst, LugarUbi: respuestas.LugarUbi };
                    id = id + 1;
                    bestUniverS5.push(uniIngresada);
                    console.log('Tus universidades son', bestUniverS5);
                    arregloParseado = JSON.stringify(bestUniverS5);
                    _03_escribir_archivo_1.escribirArchivo('./mejoresU.txt', arregloParseado);
                    preguntarUsuario().then().catch();
                    return [2 /*return*/];
            }
        });
    });
}
function preguntarUsuario() {
    return __awaiter(this, void 0, void 0, function () {
        function menuEditar() {
            return __awaiter(this, void 0, void 0, function () {
                var IdAEditar, AidEncontrado, queVaAEditar, respuestaCampo, nuevoNombre, nuevonNumeroEst, nuevoAño, nuevoLugar, nuevaCiudad, nuevoRegistroStringificado;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'Id',
                                message: 'Ingrese el Id de la U cuya informacion desea editar'
                            })];
                        case 1:
                            IdAEditar = _a.sent();
                            AidEncontrado = bestUniverS5.findIndex(function (valorActual) {
                                return valorActual.Id == IdAEditar.Id;
                            });
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'campoAEditar',
                                    message: '¿Que campo desea editar,debe escribir el campo tal cual esta en su pantalla?'
                                })];
                        case 2:
                            queVaAEditar = _a.sent();
                            respuestaCampo = queVaAEditar.campoAEditar;
                            if (!(respuestaCampo == 'Nombre')) return [3 /*break*/, 4];
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'nuevoNombre',
                                    message: 'Ingrese el nombre de la U'
                                })];
                        case 3:
                            nuevoNombre = _a.sent();
                            bestUniverS5[AidEncontrado].Nombre = nuevoNombre.nuevoNombre;
                            return [3 /*break*/, 13];
                        case 4:
                            if (!(respuestaCampo == 'NumeroEst')) return [3 /*break*/, 6];
                            return [4 /*yield*/, prompts({
                                    type: 'number',
                                    name: 'nuevosEs',
                                    message: 'Ingrese el numero de estudiantes real'
                                })];
                        case 5:
                            nuevonNumeroEst = _a.sent();
                            bestUniverS5[AidEncontrado].NumeroEst = nuevonNumeroEst.nuevosEs;
                            return [3 /*break*/, 13];
                        case 6:
                            if (!(respuestaCampo == 'AnioFund')) return [3 /*break*/, 8];
                            return [4 /*yield*/, prompts({
                                    type: 'number',
                                    name: 'añoFundacionNue',
                                    message: 'Ingrese el nuevo año de fundacion'
                                })];
                        case 7:
                            nuevoAño = _a.sent();
                            bestUniverS5[AidEncontrado].AnioFund = nuevoAño.añoFundacionNue;
                            return [3 /*break*/, 13];
                        case 8:
                            if (!(respuestaCampo == 'LugarDondeBebenLosEst')) return [3 /*break*/, 10];
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'nuevoBar',
                                    message: 'Ingrese el nuevo bar a donde van a beber'
                                })];
                        case 9:
                            nuevoLugar = _a.sent();
                            bestUniverS5[AidEncontrado].LugarDondeBebenLosEst = nuevoLugar.nuevoBar;
                            return [3 /*break*/, 13];
                        case 10:
                            if (!(respuestaCampo == 'LugarUbi')) return [3 /*break*/, 12];
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'City',
                                    message: 'Ingrese la nueva ciudad'
                                })];
                        case 11:
                            nuevaCiudad = _a.sent();
                            bestUniverS5[AidEncontrado].LugarUbi = nuevaCiudad.City;
                            return [3 /*break*/, 13];
                        case 12:
                            console.log('Ingrese un campo valido');
                            _a.label = 13;
                        case 13:
                            ;
                            console.log('El registro de tus mejores universidades:', bestUniverS5);
                            nuevoRegistroStringificado = JSON.stringify(bestUniverS5);
                            _03_escribir_archivo_1.escribirArchivo('./mejoresU.txt', nuevoRegistroStringificado);
                            preguntarUsuario().then().catch();
                            return [2 /*return*/, bestUniverS5];
                    }
                });
            });
        }
        function eliminarRegistro() {
            return __awaiter(this, void 0, void 0, function () {
                var AidAEliminar, AidEncontrado, registroBorrado;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'Id',
                                message: 'Ingrese el id de la Universidad a eliminar'
                            })];
                        case 1:
                            AidAEliminar = _a.sent();
                            AidEncontrado = bestUniverS5.findIndex(function (valorActual) {
                                return valorActual.Id == AidAEliminar.Id;
                            });
                            bestUniverS5.splice(AidEncontrado, 1);
                            console.log('La mejores son:', bestUniverS5);
                            registroBorrado = JSON.stringify(bestUniverS5);
                            _03_escribir_archivo_1.escribirArchivo('./mejoresU.txt', registroBorrado);
                            preguntarUsuario().then().catch();
                            return [2 /*return*/, bestUniverS5];
                    }
                });
            });
        }
        var decision;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompts({
                        type: 'number',
                        name: 'siono',
                        message: 'PRESIONA\n0-->Agregar mas universidades\n1-->Editar tus universidades\n2--->Eliminar una universidad\n3-->Salir'
                    })];
                case 1:
                    decision = _a.sent();
                    if (decision.siono == 0) {
                        mejoresUniversidades().then().catch();
                    }
                    else if (decision.siono == 1) {
                        menuEditar().then().catch();
                    }
                    else if (decision.siono == 2) {
                        eliminarRegistro().then().catch();
                    }
                    else if (decision.siono == 3) {
                        console.log('ADIOOOOOOS PRRRO');
                    }
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
main();
