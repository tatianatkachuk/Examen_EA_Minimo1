"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    id_evento: {
        type: String,
        required: true
    },
    id_persona: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Evento', schema);
