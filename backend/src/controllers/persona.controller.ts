import { Request, Response } from 'express'

// Models
import Persona from '../models/Persona';


/*export async function getPersonas(req: Request, res: Response): Promise<Response> {
    try{
        const personas = await Persona.find()
        return res.json(personas);

    }catch(error){
        console.log(error);
        res.status(500).send('Internal server error');
        return res.json({
            message: 'Internal server error',
        })
    }
};*/

export async function getPersona(req: Request, res: Response): Promise<Response> {
    try{
        let persona = await Persona.findById(req.params.id)
        if(!persona){
            res.status(404).send('Evento not found');
        }
        return res.json(persona);

    }catch(error){
        console.log(error);
        res.status(500).send('Internal server error');
        return res.json({
            message: 'Internal server error',
        })
    }
};