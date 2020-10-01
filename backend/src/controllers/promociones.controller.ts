import { conexion } from "../database";

import { Request, Response } from "express";

import { IPromociones } from '../models/promociones';

export class PromocionesController{
    //listar una promocion
    public async listarTrianaPromociones(req:Request, res:Response)
    {
        //aca se logro la conexión con la base de datos
        const db= await conexion();
        
        let triana_promociones = await db.query("select * from promociones");

        return res.json(triana_promociones);
    }

    //guardar una promocion
    public async guardarTrianaPromociones(req:Request, res:Response)
    {
        const db= await conexion();

        const triana_promociones: IPromociones= req.body;

        await db.query("insert into promociones set ?",[triana_promociones]);

        return res.json('la promocion fue guardada exitosamente');
    }

    //eliminar una promocion
    public async eliminarTrianaPromociones(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_promociones = req.params.codigo_triana_promociones;

        await db.query("delete from promociones where id_promo = ?", [codigo_triana_promociones]);

        return res.json('La promocion se eliminó correctamente');
    }

    //actulizar una promocion
    public async actualizarTrianaPromociones(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_promociones = req.params.codigo_triana_promociones;

        let nuevos_datos_promociones = req.body;

        await db.query("update promociones set ? where id_promo = ?", [nuevos_datos_promociones,codigo_triana_promociones]);
        
        return res.json('Se actualizo exitosamente');
    }

    //obtener una promocion
    public async obtenerUnTrianaPromociones(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_promociones = req.params.codigo_triana_promociones;

        let unaPromocion = await db.query("select * from promociones where id_promo = ?", [codigo_triana_promociones]);

        return res.json(unaPromocion[0]);
    }
}