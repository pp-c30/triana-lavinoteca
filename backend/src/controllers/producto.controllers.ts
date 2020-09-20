import { conexion } from "../database";

import { Request, Response } from "express"; 

import { IProducto } from '../models/producto';

export class ProductoController{
    //Listado de pagos
    public async listarTrianaProducto(req:Request, res:Response)
    {
        //aca logro la conexión con la base de datos
        const db = await conexion();

        let pagos = await db.query('select * from pagos');

        return res.json(pagos);
    }

    //Guardar pagos
    public async guardarTrianaProducto(req:Request, res:Response)
    {
        const db= await conexion();

        const pago:IProducto= req.body;

        await db.query("insert into pagos set ?",[pago]);

        return res.json('El pago fue guardado exitosamente');
    }

    //Eliminar pagos
    public async eliminarTrianaProducto(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo = req.params.codigo;

        await db.query("delete from pagos where id_pago = ?", [codigo]);

        return res.json('El pago se eliminó correctamente');
    }

    //actualizar pagos
    public async actualizarTrianaPoducto(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo = req.params.codigo;

        let nuevos_datos_pago = req.body;

        await db.query("update pagos set ? where id_pago = ?", [nuevos_datos_pago,codigo]);
        
        return res.json('Se actualizo exitosamente');
    }

    //Obtener un pago
    public async obtenerUnTrianaProducto(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo = req.params.codigo;

        let unPago = await db.query("select * from pagos where id_pago = ?", [codigo]);

        return res.json(unPago[0]);
    }
}