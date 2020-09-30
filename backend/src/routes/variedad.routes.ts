import { Router } from "express";
import { VariedadController } from "../controllers/variedad.controllers";

let trianaController = new VariedadController();

const enrutadorTriana = Router();

enrutadorTriana.route('/triana_variedad').get(trianaController.listarTrianaVariedad); //obtener datos y mostrarlo
enrutadorTriana.route('/triana_variedad').post(trianaController.guardarTrianaVariedad); //guardar datos en la base de datos
enrutadorTriana.route('/triana_variedad/:codigo_triana_variedad').delete(trianaController.eliminarTrianaVariedad); //elimina datos de la base de datos
enrutadorTriana.route('/triana_variedad/:codigo_triana_variedad').put(trianaController.actualizarTrianaVariedad); //actualiza datos de la base de datos
enrutadorTriana.route('/triana_variedad/:codigo_triana_variedad').get(trianaController.obtenerUnTrianaVariedad); //obtiene un valor de a bae de atos
export default enrutadorTriana;

