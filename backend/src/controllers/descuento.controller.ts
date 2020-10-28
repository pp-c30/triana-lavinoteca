import { conexion } from "../database";

import { Request, Response } from "express";

import { IDescuento } from '../models/descuento';

export class DescuentoController{
    //listar descuento
    public async listarTrianaDescuento(req:Request, res:Response)
    {
        //aca se logro la conexión con la base de datos
        const db= await conexion();
        
        let triana_descuento = await db.query("select * from descuento");

        return res.json(triana_descuento);    
    }

    //guardar un descuento
    public async guardarTrianaDescuento(req:Request, res:Response)
    {
        const db= await conexion();

        const triana_descuento: IDescuento= req.body;

        await db.query("insert into descuento set ?",[triana_descuento]);

        return res.json('el descuento fue guardado exitosamente');
    }

    //eliminar un descuento
    public async eliminarTrianaDescuento(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_descuento = req.params.codigo_triana_descuento;
        
        try {
            await db.query("delete from descuento where id_des = ?", [codigo_triana_descuento]);

            return res.json('El descuento se eliminó correctamente');
        }
        catch (error) {
            return res.json('No se pudo eliminar el descuento, ya que esta siendo utilizado por una promoción')
        }
    }

    //actualizar un descuento
    public async actualizarTrianaDescuento(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_descuento = req.params.codigo_triana_descuento;

        let nuevos_datos_descuento = req.body;

        await db.query("update descuento set ? where id_des = ?", [nuevos_datos_descuento,codigo_triana_descuento]);
        
        return res.json('Se actualizo exitosamente');
    }

    //obtener un descuento
    public async obtenerUnTrianaDescuento(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_descuento = req.params.codigo_triana_descuento;

        let unDescuento = await db.query("select * from descuento where id_des = ?", [codigo_triana_descuento]);

        return res.json(unDescuento[0]);
    }
}