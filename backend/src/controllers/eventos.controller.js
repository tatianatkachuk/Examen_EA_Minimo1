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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvento = exports.deleteEvento = exports.getEvento = exports.createEvento = exports.getEventos = void 0;
// Models
var Evento_1 = __importDefault(require("../models/Evento"));
function getEventos(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var eventos, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Evento_1.default.find()];
                case 1:
                    eventos = _a.sent();
                    return [2 /*return*/, res.json(eventos)];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    res.status(500).send('Internal server error');
                    return [2 /*return*/, res.json({
                            message: 'Internal server error',
                        })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getEventos = getEventos;
;
function createEvento(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var evento, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    evento = void 0;
                    //crear evento
                    evento = new Evento_1.default(req.body);
                    return [4 /*yield*/, evento.save()];
                case 1:
                    _a.sent();
                    res.send(evento);
                    return [2 /*return*/, res.json({
                            message: 'Evento Saved Successfully',
                            evento: evento
                        })];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    res.status(500).send('Internal server error');
                    return [2 /*return*/, res.json({
                            message: 'Internal server error',
                        })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createEvento = createEvento;
;
function getEvento(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var evento, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Evento_1.default.findById(req.params.id)];
                case 1:
                    evento = _a.sent();
                    if (!evento) {
                        res.status(404).send('Evento not found');
                    }
                    return [2 /*return*/, res.json(evento)];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    res.status(500).send('Internal server error');
                    return [2 /*return*/, res.json({
                            message: 'Internal server error',
                        })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getEvento = getEvento;
;
function deleteEvento(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var evento, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, Evento_1.default.findById(req.params.id)];
                case 1:
                    evento = _a.sent();
                    if (!evento) {
                        res.status(404).send('Evento not found');
                    }
                    return [4 /*yield*/, Evento_1.default.findByIdAndRemove({ _id: req.params.id })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.json({
                            message: 'Evento Deleted Successfully',
                            evento: evento
                        })];
                case 3:
                    error_4 = _a.sent();
                    console.log(error_4);
                    res.status(500).send('Internal server error');
                    return [2 /*return*/, res.json({
                            message: 'Internal server error',
                        })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteEvento = deleteEvento;
;
function updateEvento(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, nombre, fecha, descripcion, lat, lng, id_evento, id_persona, evento, error_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, nombre = _a.nombre, fecha = _a.fecha, descripcion = _a.descripcion, lat = _a.lat, lng = _a.lng, id_evento = _a.id_evento, id_persona = _a.id_persona;
                    return [4 /*yield*/, Evento_1.default.findById(req.params.id)];
                case 1:
                    evento = _b.sent();
                    if (!evento) {
                        res.status(404).send('Evento not found');
                    }
                    //crear nuevo evento
                    evento.nombre = nombre;
                    evento.fecha = fecha;
                    evento.descripcion = descripcion;
                    evento.lat = lat;
                    evento.lng = lng;
                    evento.id_evento = id_evento;
                    return [4 /*yield*/, Evento_1.default.findOneAndUpdate({ _id: req.params.id }, evento, { new: true })];
                case 2:
                    evento = _b.sent();
                    return [2 /*return*/, res.json({
                            message: 'Evento Updated Successfully',
                            evento: evento
                        })];
                case 3:
                    error_5 = _b.sent();
                    console.log(error_5);
                    res.status(500).send('Internal server error');
                    return [2 /*return*/, res.json({
                            message: 'Internal server error',
                        })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateEvento = updateEvento;
;
