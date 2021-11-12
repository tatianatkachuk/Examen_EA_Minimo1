"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var eventos_controller_1 = require("../controllers/eventos.controller");
var persona_controller_1 = require("../controllers/persona.controller");
var router = (0, express_1.Router)();
// Routes eventos
router.route('/')
    .get(eventos_controller_1.getEventos)
    .post(eventos_controller_1.createEvento);
router.route('/:id')
    .get(eventos_controller_1.getEvento)
    .delete(eventos_controller_1.deleteEvento)
    .put(eventos_controller_1.updateEvento);

router.route('/personas')
    .get(persona_controller_1.getPersonas);

exports.default = router;
