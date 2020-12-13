import { conexion } from "../database";

import { Request, Response } from "express";

import { IOpinion } from '../models/opinion';

export class OpinionController{
    //Listado de opinion
    public async listarTrianaOpinion(req:Request, res:Response)
    {
        //aca logro la conexión con la base de datos
        const db = await conexion();

        let id = req.params.id_producto;

        let triana_opinion = await db.query('select *, date_format(fecha, "%d %M %Y") as fecha_formateada,(select nombre from producto where id_producto = o.id_producto) as id_producto from opinion o where id_producto = ?', [id]);

        return res.json(triana_opinion);
    }

    public async listarTrianaOpinionGeneral(req:Request, res:Response)
    {
        //aca logro la conexión con la base de datos
        const db = await conexion();

        let triana_opinion = await db.query('select *, date_format(fecha, "%d %M %Y") as fecha_formateada,(select nombre from producto where id_producto = o.id_producto) as id_producto from opinion o');

        return res.json(triana_opinion);
    }
    //guardar opinion
    public async guardarTrianaOpinion(req:Request, res:Response)
    {
        let triana_opinion:IOpinion = {
            id_producto : req.body.id_producto,
            cliente: req.body.cliente,
            fecha: new Date(),
            descripcion: req.body.descripcion
        }
        
        const db= await conexion();


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