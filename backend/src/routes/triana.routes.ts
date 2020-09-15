import { Router } from "express";
import { TrianaController } from "../controllers/triana.controllers";

let trianaController = new TrianaController();

const enrutadorTriana = Router();

enrutadorTriana.route('/triana_producto').get(trianaController.listarTrianaProducto); //obtener datos y mostrarlo
enrutadorTriana.route('/triana_producto').post(trianaController.guardarTrianaProducto); //guardar datos en la base de datos
enrutadorTriana.route('/triana_producto/:codigo_triana_producto').delete(trianaController.eliminarTrianaProducto); //elimina datos de la base de datos
enrutadorTriana.route('/triana_producto/:codigo_triana_producto').put(trianaController.actualizarTrianaPoducto); //actualiza datos de la base de datos
enrutadorTriana.route('/triana_producto/:codigo_triana_producto').get(trianaController.obtenerUnTrianaProducto); //obtiene un valor de a bae de atos
export default enrutadorTriana;

