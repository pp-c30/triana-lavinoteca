import { conexion } from "../database";

import { Request, Response } from "express";

import { IPromocion } from '../models/promocion';

export class PromocionController{
    //listar una promocion
    public async listarTrianaPromocion(req:Request, res:Response)
    {
        //aca se logro la conexión con la base de datos
        const db= await conexion();
        
        let triana_promocion = await db.query("select pr.id_promo, p.nombre as producto,p.id_producto as id_p, d.id_des as id_des, concat(d.descripcion,'  -  ',d.porcentaje) as descuento from promociones pr, producto p, descuento d where pr.producto = p.id_producto and pr.descuento = d.id_des");

        return res.json(triana_promocion);
    }

    //guardar una promocion
    public async guardarTrianaPromocion(req:Request, res:Response)
    {
        const db= await conexion();

        const triana_promocion: IPromocion= req.body;

        await db.query("insert into promociones set ?",[triana_promocion]);

        return res.json('la promocion fue guardada exitosamente');
    }

    //eliminar una promocion
    public async eliminarTrianaPromocion(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_promocion = req.params.codigo_triana_promocion;

        await db.query("delete from promociones where id_promo = ?", [codigo_triana_promocion]);

        return res.json('La promocion se eliminó correctamente');
    }

    //actulizar una promocion
    public async actualizarTrianaPromocion(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_promocion = req.params.codigo_triana_promocion;

        let nuevos_datos_promocion = req.body;

        await db.query("update promociones set ? where id_promo = ?", [nuevos_datos_promocion,codigo_triana_promocion]);
        
        return res.json('Se actualizo exitosamente');
    }

    //obtener una promocion
    public async obtenerUnTrianaPromocion(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_promocion = req.params.codigo_triana_promocion;

        let unaPromocion = await db.query("select * from promociones where id_promo = ?", [codigo_triana_promocion]);

        return res.json(unaPromocion[0]);
    }
}