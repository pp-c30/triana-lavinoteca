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

        let triana_producto = await db.query('select * from producto');

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
            categoria:req.body.categoria,
            stock:req.body.stock,
            precio:req.body.precio,
            imagen_url: resultado_cloud.url,
            public_id:resultado_cloud.public_id,
            bodega:req.body.bodega,
            descripcion:req.body.descripcion,
            cantmil:req.body.cantmil,
            estado:req.body.estado
        }

        await db.query('insert into producto set ?', [guardarImagen]);

        fs.unlink(req.file.path);

        res.json('Se guardo exitosamente los datos y la imagen');
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