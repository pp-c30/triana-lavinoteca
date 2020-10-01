import { Router } from "express";
import { ImagenesHomeController } from "../controllers/imageneshome.controller";

let trianaController = new ImagenesHomeController();

const enrutadorImagenesHome = Router();

enrutadorImagenesHome.route('/triana_imageneshome').get(trianaController.listarTrianaImagenesHome); //obtener datos y mostrarlo
enrutadorImagenesHome.route('/triana_imageneshome').post(trianaController.guardarTrianaImagenesHome); //guardar datos en la base de datos
enrutadorImagenesHome.route('/triana_imageneshome/:codigo_triana_imageneshome').delete(trianaController.eliminarTrianaImagenesHome); //elimina datos de la base de datos
enrutadorImagenesHome.route('/triana_imageneshome/:codigo_triana_imageneshome').put(trianaController.actualizarTrianaImagenesHome); //actualiza datos de la base de datos
enrutadorImagenesHome.route('/triana_imageneshome/:codigo_triana_imageneshome').get(trianaController.obtenerUnTrianaImagenesHome); //obtiene un valor de a bae de atos
export default enrutadorImagenesHome;

