import { conexion } from "../database";

import { Request, Response } from "express";

import { ICategoria } from '../models/categoria';

export class CategoriaController{
    //listar categoria
    public async listarTrianaCategoria(req:Request, res:Response)
    {
        //aca se logro la conexión con la base de datos
        const db= await conexion();
        
        let triana_categoria = await db.query("select * from categoria");

        return res.json(triana_categoria);    
    }

    //guardar una categoria
    public async guardarTrianaCategoria(req:Request, res:Response)
    {
        const db= await conexion();

        const triana_categoria: ICategoria= req.body;

        await db.query("insert into categoria set ?",[triana_categoria]);

        return res.json('la categoria fue guardada exitosamente');
    }

    //eliminar una categoria 
    public async eliminarTrianaCategoria(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_categoria = req.params.codigo_triana_categoria;

        await db.query("delete from categoria where id_categoria = ?", [codigo_triana_categoria]);

        return res.json('La categoria se eliminó correctamente');
    }

    //actualizar una categoria
    public async actualizarTrianaCategoria(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_categoria = req.params.codigo_triana_categoria;

        let nuevos_datos_categoria = req.body;

        await db.query("update categoria set ? where id_categoria = ?", [nuevos_datos_categoria,codigo_triana_categoria]);
        
        return res.json('Se actualizo exitosamente');
    }

    //obtener una categoria
    public async obtenerUnTrianaCategoria(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_categoria = req.params.codigo_triana_categoria;

        let unaCategoria = await db.query("select * from categoria where id_categoria = ?", [codigo_triana_categoria]);

        return res.json(unaCategoria[0]);
    }
}