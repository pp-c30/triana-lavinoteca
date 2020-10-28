import { conexion } from "../database";

import { Request, Response } from "express";

import { IVarie } from '../models/variedad';

export class VariedadController{
    //listar variedad
    public async listarTrianaVariedad(req:Request, res:Response){
        //aca logro la conexión con la base de datos
        const db = await conexion();

        let triana_variedad = await db.query('select * from variedad');

        return res.json(triana_variedad);
    }

    //guardar una variedad
    public async guardarTrianaVariedad(req:Request, res:Response)
    {
        const db= await conexion();

        const triana_variedad:IVarie= req.body;

        await db.query("insert into variedad set ?",[triana_variedad]);

        return res.json('La variedad fue guardada exitosamente');
    }

    //actualizar una variedad
    public async actualizarTrianaVariedad(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_variedad = req.params.codigo_triana_variedad;

        let nuevos_datos_variedad = req.body;

        await db.query("update variedad set ? where id_varie = ?", [nuevos_datos_variedad,codigo_triana_variedad]);
        
        return res.json('Se actualizo exitosamente');
    }

    //eliminar una variedad
    public async eliminarTrianaVariedad(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_variedad = req.params.codigo_triana_variedad;
        
        try {
            await db.query("delete from variedad where id_varie = ?", [codigo_triana_variedad]);

            return res.json('La variedad se eliminó correctamente');
        }
        catch (error) {
            return res.json('No se pudo eliminar la variedad, ya que esta siendo utilizado por un producto')
        }
    }

    //obtener una variedad
    public async obtenerUnTrianaVariedad(req:Request, res:Response){
        const db = await conexion();

        let codigo_triana_variedad = req.params.codigo_triana_variedad;

        let unaVariedad = await db.query("select * from variedad where id_varie = ?", [codigo_triana_variedad]);

        return res.json(unaVariedad[0]);
    }
}