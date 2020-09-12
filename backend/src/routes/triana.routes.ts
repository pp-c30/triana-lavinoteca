Mimport { Router } from "express";
import { TrianaController } from "../controllers/triana.controller";

let trianaController = new TrianaController();

const enrutadorTriana = Router();

enrutadorTriana.route('/triana').get(trianaController.listarTriana); //obtener datos y mostrarlo
enrutadorTriana.route('/triana').post(trianaController.guardarTriana); //guardar datos en la base de datos
enrutadorTriana.route('/triana/:codigo_triana').delete(trianaController.eliminarTriana); //elimina datos de la base de datos
enrutadorTriana.route('/triana/:codigo_triana').put(trianaController.actualizarTriana); //actualiza datos de la base de datos
enrutadorTriana.route('/triana/:codigo_triana').get(trianaController.obtenerUnTriana); //obtiene un valor de a bae de atos
export default enrutadorTriana;

