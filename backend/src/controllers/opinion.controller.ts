import { conexion } from "../database";

import { Request, Response } from "express";

import { IOpinion } from '../models/opinion';

export class OpinionController{
    //Listado de opinion
    public async listarTrianaProducto(req:Request, res:Response)
    {
        //aca logro la conexión con la base de datos
        const db = await conexion();

        let triana_opinion = await db.query('select * from opinion');

        return res.json(triana_opinion);
    }
    //guardar opinion
    public async guardarTrianaOpinion(req:Request, res:Response)
    {
        const db= await conexion();

        const triana_opinion:IOpinion= req.body;

        await db.query("insert into opinion set ?",[triana_opinion]);

        return res.json('La opinion fue guardada exitosamente');
    }

    //eliminar opinion
    public async eliminarTrianaOpinion(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_opinion = req.params.codigo_triana_opinion;

        await db.query("delete from opinion where id_opinion = ?", [codigo_triana_opinion]);

        return res.json('La opinion se eliminó correctamente');
    }
}