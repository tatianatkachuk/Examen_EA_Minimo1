import { Request, Response } from 'express'

// Models
import Evento from '../models/Evento'


export async function getEventos(req: Request, res: Response): Promise<Response> {
    try{
        const eventos = await Evento.find()
        return res.json(eventos);

    }catch(error){
        console.log(error);
        res.status(500).send('Internal server error');
        return res.json({
            message: 'Internal server error',
        })
    }
};

export async function createEvento(req: Request, res: Response): Promise<Response> {
    try{
        let evento;

        //crear evento
        evento = new Evento(req.body)
        await evento.save();
        res.send(evento);
        return res.json({
            message: 'Evento Saved Successfully',
            evento
        });

    }catch(error){
        console.log(error);
        res.status(500).send('Internal server error');
        return res.json({
            message: 'Internal server error',
        })
    }
};

export async function getEvento(req: Request, res: Response): Promise<Response> {
    try{
        let evento = await Evento.findById(req.params.id)
        if(!evento){
            res.status(404).send('Evento not found');
        }
        return res.json(evento);

    }catch(error){
        console.log(error);
        res.status(500).send('Internal server error');
        return res.json({
            message: 'Internal server error',
        })
    }
};

export async function deleteEvento(req: Request, res: Response): Promise<Response> {
    try{
        let evento = await Evento.findById(req.params.id)
        if(!evento){
            res.status(404).send('Evento not found');
        }
        await Evento.findByIdAndRemove({_id: req.params.id})
        return res.json({
            message: 'Evento Deleted Successfully',
            evento
        });

    }catch(error){
        console.log(error);
        res.status(500).send('Internal server error');
        return res.json({
            message: 'Internal server error',
        })
    }
};

export async function updateEvento(req: Request, res: Response): Promise<Response> {
    try{
        const { nombre, fecha, descripcion, lat, lng, id_evento, id_persona } = req.body;
        let evento = await Evento.findById(req.params.id)

        if(!evento){
            res.status(404).send('Evento not found');
        }
        //crear nuevo evento
        evento.nombre = nombre;
        evento.fecha = fecha;
        evento.descripcion = descripcion;
        evento.lat = lat;
        evento.lng = lng;
        evento.id_evento = id_evento;
        evento.id_persona = id_persona;

        evento = await Evento.findOneAndUpdate(
            {_id: req.params.id}, evento, {new: true})
        
        return res.json({
            message: 'Evento Updated Successfully',
            evento
        });

    }catch(error){
        console.log(error);
        res.status(500).send('Internal server error');
        return res.json({
            message: 'Internal server error',
        })
    }
};