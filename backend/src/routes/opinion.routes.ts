import { Router } from "express";
import { OpinionController } from "../controllers/opinion.controller";

let opinionController = new OpinionController();


const enrutadorOpinion = Router();

enrutadorOpinion.route('/triana_opinion/:id_producto').get(opinionController.listarTrianaOpinion); //obtener datos y mostrarlo
enrutadorOpinion.route('/triana_opinion').get(opinionController.listarTrianaOpinionGeneral); //obtener datos y mostrarlo
enrutadorOpinion.route('/triana_opinion').post(opinionController.guardarTrianaOpinion); //guardar datos en la base de datos
enrutadorOpinion.route('/triana_opinion/:codigo_triana_opinion').delete(opinionController.eliminarTrianaOpinion); //elimina datos de la base de datos
export default enrutadorOpinion;

