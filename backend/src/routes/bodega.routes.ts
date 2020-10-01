import { Router } from "express";
import { BodegaController } from "../controllers/bodega.controller";

let trianaController = new BodegaController();

const enrutadorBodega = Router();

enrutadorBodega.route('/triana_bodega').get(trianaController.listarTrianaBodega); //obtener datos y mostrarlo
enrutadorBodega.route('/triana_bodega').post(trianaController.guardarTrianaBodega); //guardar datos en la base de datos
enrutadorBodega.route('/triana_bodega/:codigo_triana_bodega').delete(trianaController.eliminarTrianaBodega); //elimina datos de la base de datos
enrutadorBodega.route('/triana_bodega/:codigo_triana_bodega').put(trianaController.actualizarTrianaBodega); //actualiza datos de la base de datos
enrutadorBodega.route('/triana_bodega/:codigo_triana_bodega').get(trianaController.obtenerUnTrianaBodega); //obtiene un valor de a bae de atos
export default enrutadorBodega;

