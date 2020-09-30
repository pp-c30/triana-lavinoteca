import { conexion } from "../database";

import { Request, Response } from "express";

import { IBodega } from '../models/bodega';

export class BodegaController{
    //listado de bodega
    public async listarTrianaBodega(req:Request, res:Response)
    {
        //aca se logro la conexión con la base de datos
        const db= await conexion();
        
        let triana_bodega = await db.query("select * from bodega");

        return res.json(triana_bodega);
    }

    //guardar bodega
    public async guardarTrianaBodega(req:Request, res:Response)
    {
        const db= await conexion();

        const triana_bodega: IBodega= req.body;

        await db.query("insert into bodega set ?",[triana_bodega]);

        return res.json('la bodega fue guardada exitosamente');
    }

    //eliminar bodega
    public async borrarTrianaBodega(req:Request, res:Response)
    {
        
    }
}