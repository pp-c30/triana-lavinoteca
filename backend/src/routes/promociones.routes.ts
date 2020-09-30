import { Router } from "express";
import { PromocionesController } from "../controllers/promociones.controllers";

let trianaController = new PromocionesController();

const enrutadorTriana = Router();

enrutadorTriana.route('/triana_promociones').get(trianaController.listarTrianaPromociones); //obtener datos y mostrarlo
enrutadorTriana.route('/triana_promociones').post(trianaController.guardarTrianaPromociones); //guardar datos en la base de datos
enrutadorTriana.route('/triana_promociones/:codigo_triana_promociones').delete(trianaController.eliminarTrianaPromociones); //elimina datos de la base de datos
enrutadorTriana.route('/triana_promociones/:codigo_triana_promociones').put(trianaController.actualizarTrianaPromociones); //actualiza datos de la base de datos
enrutadorTriana.route('/triana_promociones/:codigo_triana_promociones').get(trianaController.obtenerUnTrianaPromociones); //obtiene un valor de a bae de atos
export default enrutadorTriana;

