import { conexion } from "../database";
import { Request, Response } from "express";
import cloudinary from "cloudinary";
import fs from "fs-extra";

cloudinary.v2.config({
    cloud_name:'dmutxyaog',
    api_key:'665112836568814',
    api_secret:'eR6juzj8BGCBSxNldixJU1sM_ds',
});

export class ImagenesHomeController{
    //operaciones CRUD 
    public async guardarTrianaImagenesHome(req:Request, res:Response)
    {
        const db = await conexion();

        const url_img=req.file.path;

        //fuimos a buscar la imagen a la carpeta upload para subirla a cloudinary
        const resultado_cloud =await cloudinary.v2.uploader.upload(req.file.path);
    
        //se guardan datos en la base
        const guardarImagenesHome = {
            nombre:req.body.nombre,
            estado:Number(req.body.estado),
            imagen_url: resultado_cloud.url,
            public_id:resultado_cloud.public_id

        }

        await db.query('insert into imageneshome set ?', [guardarImagenesHome]);

        fs.unlink(req.file.path);

        res.json('Se guardo exitosamente los datos y la imagen');
    }

    async listarTrianaImagenesHome(req:Request, res:Response)
    {
        const db = await conexion();
        
        let lista = await db.query('select * from imageneshome');
        
        res.json(lista);
    }

    async actualizarTrianaImagenesHome(req:Request, res:Response)
    {
        try {
            const db = await conexion();

            let id = req.params.id;
    
            var updateImagenesHome;
    
            var public_id_anterior = req.body.public_id;
    
            if(req.file)
            {
                // Se sube imagen a cloudinary y se genera un public id
                const resultado_cloud = await cloudinary.v2.uploader.upload(req.file.path);
    
                updateImagenesHome = {
                    nombre: req.body.nombre,
                    estado: Number(req.body.estado),
                    imagen_url: resultado_cloud.url,
                    public_id:resultado_cloud.public_id
                }
    
                await db.query('update imageneshome set ? where id_imagen = ?', [updateImagenesHome, id]);
    
                fs.unlink(req.file.path);
    
                await cloudinary.v2.uploader.destroy(public_id_anterior);
            }
            else {
                updateImagenesHome = {
                    nombre: req.body.nombre,
                    estado: Number(req.body.estado)
                }
                await db.query('update imageneshome set ? where id_imagen = ?', [updateImagenesHome, id]);
            }
            res.json('Se actualizó exitosamente!')
        } catch (error) {
            console.error(error);
        }
    }

    async eliminarImagenesHome(req: Request, res: Response)
    {
        let id = req.params.id;

        let public_id = req.params.public_id;

        // eliminamos la imagen de cloudinary
        await cloudinary.v2.uploader.destroy(public_id);

        const db = await conexion()

        // eliminamos registro en la base
        await db.query('delete from imageneshome where id_imagen = ?',[id]);

        res.json('Se elimino exitosamente el registro');
    }

    async obtenerUnTrianaImagenesHome(req:Request, res:Response)
    {
        const db = await conexion();

        let id_imagen = req.params.id_imagen;

        const unaImagen = await db.query("select * from imageneshome where id_imagen = ?", [id_imagen]);

        return res.json(unaImagen[0]);
    }
}