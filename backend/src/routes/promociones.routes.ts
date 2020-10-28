import { Router } from "express";
import { PromocionesController } from "../controllers/promociones.controller";

let promocionesController = new PromocionesController();

const enrutadorPromociones = Router();

enrutadorPromociones.route('/triana_promociones').get(promocionesController.listarTrianaPromociones); //obtener datos y mostrarlo
enrutadorPromociones.route('/triana_promociones').post(promocionesController.guardarTrianaPromociones); //guardar datos en la base de datos
enrutadorPromociones.route('/triana_promociones/:codigo_triana_promociones').delete(promocionesController.eliminarTrianaPromociones); //elimina datos de la base de datos
enrutadorPromociones.route('/triana_promociones/:codigo_triana_promociones').put(promocionesController.actualizarTrianaPromociones); //actualiza datos de la base de datos
enrutadorPromociones.route('/triana_promociones/:codigo_triana_promociones').get(promocionesController.obtenerUnTrianaPromociones); //obtiene un valor de a bae de atos
export default enrutadorPromociones;

