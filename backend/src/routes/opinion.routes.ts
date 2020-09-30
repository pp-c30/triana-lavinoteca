import { Router } from "express";
import { OpinionController } from "../controllers/opinion.controllers";

let trianaController = new OpinionController();
let byb

const enrutadorTriana = Router();


enrutadorTriana.route('/triana_opinion').get(trianaController.listarTrianaOpinion); //obtener datos y mostrarlo
enrutadorTriana.route('/triana_opinion').post(trianaController.guardarTrianaOpinion); //guardar datos en la base de datos
enrutadorTriana.route('/triana_opinion/:codigo_triana_opinion').delete(trianaController.eliminarTrianaOpinion); //elimina datos de la base de datos
enrutadorTriana.route('/triana_opinion/:codigo_triana_opinion').put(trianaController.actualizarTrianaOpinion); //actualiza datos de la base de datos
enrutadorTriana.route('/triana_opinion/:codigo_triana_opinion').get(trianaController.obtenerUnTrianaOpinion); //obtiene un valor de a bae de atos
export default enrutadorTriana;

