import { conexion } from "../database";

import { Request, Response } from "express"; 

import { IProducto } from '../models/producto';

export class ProductoController{
    //Listado de producto
    public async listarTrianaProducto(req:Request, res:Response)
    {
        //aca logro la conexión con la base de datos
        const db = await conexion();

        let triana_producto = await db.query('select * from producto');

        return res.json(triana_producto);
    }

    //Guardar producto
    public async guardarTrianaProducto(req:Request, res:Response)
    {
        const db= await conexion();

        const triana_producto:IProducto= req.body;

        await db.query("insert into producto set ?",[triana_producto]);

        return res.json('El producto fue guardado exitosamente');
    }

    //Eliminar producto
    public async eliminarTrianaProducto(req:Request, res:Response)
    {
    }

    //actualizar producto
    public async actualizarTrianaPoducto(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_producto = req.params.codigo_triana_producto;

        let nuevos_datos_producto = req.body;

        await db.query("update producto set ? where id_producto = ?", [nuevos_datos_producto,codigo_triana_producto]);
        
        return res.json('Se actualizo exitosamente');
    }

    //Obtener un producto 
    public async obtenerUnTrianaProducto(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_producto = req.params.codigo_triana_producto;

        let unProducto = await db.query("select * from producto where id_producto = ?", [codigo_triana_producto]);

        return res.json(unProducto[0]);
    }
}