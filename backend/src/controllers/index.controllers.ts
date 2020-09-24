import {Request, Response} from 'express';

export function mensaje_bienvenida(req:Request, res:Response)
{
    res.json("Esta es la ruta principal de la página");
}