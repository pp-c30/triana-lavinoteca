import { Router } from "express";
import { BodegaController } from "../controllers/bodega.controller";
import { validarToken } from "../libs/verificarToken";

let bodegaController = new BodegaController();

const enrutadorBodega = Router();

enrutadorBodega.route('/triana_bodega').get(validarToken,bodegaController.listarTrianaBodega); //obtener datos y mostrarlo
enrutadorBodega.route('/triana_bodega').post(bodegaController.guardarTrianaBodega); //guardar datos en la base de datos
enrutadorBodega.route('/triana_bodega/:codigo_triana_bodega').delete(bodegaController.eliminarTrianaBodega); //elimina datos de la base de datos
enrutadorBodega.route('/triana_bodega/:codigo_triana_bodega').put(bodegaController.actualizarTrianaBodega); //actualiza datos de la base de datos
enrutadorBodega.route('/triana_bodega/:codigo_triana_bodega').get(bodegaController.obtenerUnTrianaBodega); //obtiene un valor de a bae de atos
export default enrutadorBodega;

