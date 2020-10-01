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
    public async eliminarTrianaBodega(req:Request, res:Response)
    {

        let codigo_triana_bodega = req.params.codigo_triana_bodega;

        await db.query("delete from bodega where id_bodega = ?", [codigo_triana_bodega]);

        return res.json('La bodega se eliminó correctamente');
    }
    
    //actualizar bodega
    public async actualizarTrianaBodega(req:Request, res:Response){
        const db = await conexion();

        let codigo_triana_bodega = req.params.codigo_triana_bodega;

        let nuevos_datos_bodega = req.body;

        await db.query("update bodega set ? where id_bodega = ?", [nuevos_datos_bodega,codigo_triana_bodega]);
        
        return res.json('Se actualizo exitosamente');

    }
    
    //obtener una bodega
    public async obtenerUnTrianaBodega(req:Request, res:Response){
        const db = await conexion();

        let codigo_triana_bodega = req.params.codigo_triana_bodega;

        let unaBodega = await db.query("select * from bodega where id_bodega = ?", [codigo_triana_bodega]);

        return res.json(unaBodega[0]);
    }
}