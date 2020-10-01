import { Router } from "express";
import { VariedadController } from "../controllers/variedad.controllers";

let trianaController = new VariedadController();

const enrutadorVariedad = Router();

enrutadorVariedad.route('/triana_variedad').get(trianaController.listarTrianaVariedad); //obtener datos y mostrarlo
enrutadorVariedad.route('/triana_variedad').post(trianaController.guardarTrianaVariedad); //guardar datos en la base de datos
enrutadorVariedad.route('/triana_variedad/:codigo_triana_variedad').put(trianaController.actualizarTrianaVariedad); //actualiza datos de la base de datos
enrutadorVariedad.route('/triana_variedad/:codigo_triana_variedad').get(trianaController.obtenerUnTrianaVariedad); //obtiene un valor de a bae de atos
export default enrutadorVariedad;

