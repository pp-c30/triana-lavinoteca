import { Router } from "express";
import { OpinionController } from "../controllers/opinion.controller";

let trianaController = new OpinionController();


const enrutadorOpinion = Router();

enrutadorOpinion.route('/triana_opinion').post(trianaController.guardarTrianaOpinion); //guardar datos en la base de datos
enrutadorOpinion.route('/triana_opinion/:codigo_triana_opinion').delete(trianaController.eliminarTrianaOpinion); //elimina datos de la base de datos
export default enrutadorOpinion;

