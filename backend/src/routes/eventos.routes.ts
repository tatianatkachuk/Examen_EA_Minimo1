import { Router } from 'express'

import { getEventos, createEvento, getEvento, deleteEvento, updateEvento } from '../controllers/eventos.controller';
import { getPersona } from '../controllers/persona.controller';

const router = Router();

// Routes eventos
router.route('/')
    .get(getEventos)
    .post(createEvento);

router.route('/:id')
    .get(getEvento)
    .delete(deleteEvento)
    .put(updateEvento)

// Routes personas

router.route('/personas/:id')
    .get(getPersona)
    
export default router;