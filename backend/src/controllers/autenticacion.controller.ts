import { Response, Request } from "express";
import { conexion } from "../database";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export class AutenticacionController{

    async registrar (req:Request,res:Response){

        const salt = await bcryptjs.genSalt(10);

        const password_cifrada = await bcryptjs.hash(req.body.password,salt);
        const unUsuario = {
            username: req.body.username,
            password: password_cifrada,
            email: req.body.email
        }

        const db = await conexion();
        const resultado = await db.query('insert into usuario set ?',[unUsuario]);
        const token:string = jwt.sign({_id:resultado.insertId},process.env.TOKEN_SECRET || '12qwaszk');
        res.json(token)
    }
    async ingresar (req:Request,res:Response){
        const db = await conexion();
        const usuario = await db.query('select * from usuario where username = ?',[req.body.username]);

        if(!usuario[0]){
            res.json('usuario o contraseña incorecta')
        }else{
           const correctPasword = await bcryptjs.compare(req.body.password, usuario[0].password);

           if(!correctPasword){
                res.json('Contraseña incorecta!');
           }else{
            const token:string = jwt.sign({_id:usuario[0].id_usuario},process.env.TOKEN_SECRET || '12qwaszk',{expiresIn:60*60*24});
            res.json(token);
           }
        }
        
    } 
}