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
var leer_archivo_1 = require("./leer-archivo");
function main() {
    mejoresUniversidades().then().catch();
}
function mejoresUniversidades() {
    return __awaiter(this, void 0, void 0, function () {
        var contenidoPredeterminado, convertirArchivo, bestUniverS5, decision, ingresandoDatosUni, respuestas, uniIngresada, preguntarSiOcurrioAlgunError, nombreUniversidadAEditar, buscarUnversidad_1, posicionUniMalTipada, datosNuevoDeUniversidadaMalTipada, respuestasUniversidadEditada, definitivoUniversidadEditada;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contenidoPredeterminado = leer_archivo_1.leerMejoresUni('./Mejoresuniversidades.txt');
                    convertirArchivo = JSON.parse(contenidoPredeterminado);
                    bestUniverS5 = convertirArchivo;
                    console.log('Según varios estudios las mejores universidades del Ecuador son las siguientes:\n', bestUniverS5);
                    console.log('¿Te animas a completar el top five?');
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'siono',
                            message: 'PRESIONA\n0-->SI\n1-->NO,prefiero cantar tusa xd xd '
                        })];
                case 1:
                    decision = _a.sent();
                    if (!(decision.siono == 1)) return [3 /*break*/, 2];
                    console.log('Neta me lo juras?');
                    console.log('OK,ADIOS');
                    return [3 /*break*/, 8];
                case 2:
                    if (!(decision.siono == 0)) return [3 /*break*/, 8];
                    ingresandoDatosUni = [
                        {
                            type: 'text',
                            name: 'Nombre',
                            message: 'Ingresa el nombre de la Universidad:',
                        },
                        {
                            type: 'number',
                            name: 'NumeroEst',
                            message: 'Ingresa el numero de estudaiantes de la universidaad: ',
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
                case 3:
                    respuestas = _a.sent();
                    uniIngresada = { Nombre: respuestas.Nombre, NumeroEst: respuestas.NumeroEst, AnioFund: respuestas.AnioFund,
                        LugarDondeBebenLosEst: respuestas.LugarDondeBebenLosEst, LugarUbi: respuestas.LugarUbi };
                    bestUniverS5.push(uniIngresada);
                    console.log('Venga,has ingresado ya,la  universidad que faltaba', bestUniverS5);
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'Error',
                            message: 'PRESIONA\n1-->editar datos de tu universidad\n2-->eliminar tu universidad\n3--->Salir'
                        })];
                case 4:
                    preguntarSiOcurrioAlgunError = _a.sent();
                    if (!(preguntarSiOcurrioAlgunError.Error == 1)) return [3 /*break*/, 7];
                    console.log('Ahora trataremos de solucionar este error');
                    nombreUniversidadAEditar = [bestUniverS5[0].Nombre, bestUniverS5[1].Nombre, bestUniverS5[2].Nombre, bestUniverS5[3], bestUniverS5[4]];
                    console.log(nombreUniversidadAEditar);
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'Nombre',
                            message: '\nNombre de la Universidad a editar?:'
                        })];
                case 5:
                    buscarUnversidad_1 = _a.sent();
                    posicionUniMalTipada = bestUniverS5.findIndex(function (valorActual) {
                        return valorActual.Nombre == buscarUnversidad_1.Nombre;
                    });
                    datosNuevoDeUniversidadaMalTipada = [
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
                            message: 'Ingresa en el lugar mas cerca donde ingieren alcohol sus estudiantes:',
                        },
                        {
                            type: 'text',
                            name: 'LugarUbi',
                            message: 'Ingresa en que ciudad esta ubicada:',
                        }
                    ];
                    return [4 /*yield*/, prompts(datosNuevoDeUniversidadaMalTipada)];
                case 6:
                    respuestasUniversidadEditada = _a.sent();
                    definitivoUniversidadEditada = { Nombre: respuestasUniversidadEditada.Nombre, NumeroEst: respuestasUniversidadEditada.NumeroEst,
                        AnioFund: respuestasUniversidadEditada.AnioFund, LugarDondeBebenLosEst: respuestasUniversidadEditada.LugarDondeBebenLosEst,
                        LugarUbi: respuestasUniversidadEditada.LugarUbi
                    };
                    bestUniverS5[posicionUniMalTipada] = definitivoUniversidadEditada;
                    console.log('Esperemos que no te hayas equivocado esta vez');
                    console.log('tu top five es', bestUniverS5);
                    return [3 /*break*/, 8];
                case 7:
                    if (preguntarSiOcurrioAlgunError.Error == 2) {
                        console.log("Entendemos que para ti solo hay 4 mejores universidades,procedermos a eliminar tu universidad");
                        bestUniverS5.pop();
                        console.log(bestUniverS5);
                        console.log('Ahora hemos eliminado tu universidad :C');
                    }
                    else if (preguntarSiOcurrioAlgunError.Error == 3) {
                        console.log('Me siento muy feliz de tu elección');
                    }
                    _a.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    });
}
main();
