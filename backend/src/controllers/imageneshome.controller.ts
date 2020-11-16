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
            estado:req.body.estado,
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
}