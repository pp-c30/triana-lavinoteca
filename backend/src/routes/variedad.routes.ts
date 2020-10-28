import { Router } from "express";
import { VariedadController } from "../controllers/variedad.controller";

let variedadController = new VariedadController();

const enrutadorVariedad = Router();

enrutadorVariedad.route('/triana_variedad').get(variedadController.listarTrianaVariedad); //obtener datos y mostrarlo
enrutadorVariedad.route('/triana_variedad').post(variedadController.guardarTrianaVariedad); //guardar datos en la base de datos
enrutadorVariedad.route('/triana_variedad/:codigo_triana_variedad').delete(variedadController.eliminarTrianaVariedad); //elimina datos de la base de datos
enrutadorVariedad.route('/triana_variedad/:codigo_triana_variedad').put(variedadController.actualizarTrianaVariedad); //actualiza datos de la base de datos
enrutadorVariedad.route('/triana_variedad/:codigo_triana_variedad').get(variedadController.obtenerUnTrianaVariedad); //obtiene un valor de a bae de atos
export default enrutadorVariedad;

