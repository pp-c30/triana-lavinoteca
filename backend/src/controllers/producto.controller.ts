import { conexion } from "../database";
import { Request, Response } from "express"; 
import cloudinary from "cloudinary";
import fs from "fs-extra";

cloudinary.v2.config({
    cloud_name:'dmutxyaog',
    api_key:'665112836568814',
    api_secret:'eR6juzj8BGCBSxNldixJU1sM_ds',
});

export class ProductoController{
    //Listado de producto
    public async listarTrianaProducto(req:Request, res:Response)
    {
        //aca logro la conexión con la base de datos
        const db = await conexion();

        let triana_producto = await db.query('select p.*, v.descripcion as descripcion_variedad, c.descripcion as descripcion_categoria, b.descripcion as descripcion_bodega from producto p, variedad v, categoria c, bodega b where p.variedad = v.id_varie and p.categoria = c.id_categoria and p.bodega = b.id_bodega');

        return res.json(triana_producto);
    }

    //Guardar producto
    public async guardarTrianaProducto(req:Request, res:Response)
    {
        const db = await conexion();

        const url_img=req.file.path;

        //fuimos a buscar la imagen a la carpeta upload para subirla a cloudinary
        const resultado_cloud =await cloudinary.v2.uploader.upload(req.file.path);
    
        //se guardan datos en la base
        const guardarImagen = {
            nombre:req.body.nombre,
            categoria:Number(req.body.categoria),
            stock:Number(req.body.stock),
            precio:Number(req.body.precio),
            imagen: resultado_cloud.url,
            public_id:resultado_cloud.public_id,
            bodega:Number(req.body.bodega),
            descripcion:req.body.descripcion,
            cantmil:Number(req.body.cantmil),
            estado:Number(req.body.estado),
            variedad:Number(req.body.variedad)
        }

        await db.query('insert into producto set ?', [guardarImagen]);

        fs.unlink(req.file.path);

        res.json('Se guardo exitosamente los datos y la imagen');
    }
    
    //eliminar un producto
    public async eliminarTrianaProducto(req:Request, res:Response)
    {
        const db = await conexion();

        let codigo_triana_producto = req.params.codigo_triana_producto;
        
        try {
            await db.query("delete from producto where id_producto = ?", [codigo_triana_producto]);

            return res.json('El producto se eliminó correctamente');
        }
        catch (error) {
            return res.json('No se pudo eliminar el producto, ya que esta siendo utilizado por una opinión y/o promoción')
        }
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

        let id_producto = req.params.id_producto;

        const unProducto = await db.query("select p.*, v.descripcion as descripcion_variedad, c.descripcion as descripcion_categoria, b.descripcion as descripcion_bodega from producto p, variedad v, categoria c, bodega b where p.variedad = v.id_varie and p.categoria = c.id_categoria and p.bodega = b.id_bodega and id_producto = ?", [id_producto]);

        return res.json(unProducto[0]);
    }
}