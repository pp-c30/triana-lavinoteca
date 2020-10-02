import { conexion } from "../database";

import { Request, Response } from "express";


export class ImagenesHomeController{
    //operaciones CRUD 
    public async guardarTrianaImagenesHome(req:Request, res:Response){
        const db = await conexion();

        await db.query('insert into imageneshome set ?', []);

    }
}