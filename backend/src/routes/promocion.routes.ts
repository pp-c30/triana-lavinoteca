import { Router } from "express";
import { PromocionController } from "../controllers/promocion.controller";

let promocionController = new PromocionController();

const enrutadorPromocion = Router();

enrutadorPromocion.route('/triana_promocion').get(promocionController.listarTrianaPromocion); //obtener datos y mostrarlo
enrutadorPromocion.route('/triana_promocion').post(promocionController.guardarTrianaPromocion); //guardar datos en la base de datos
enrutadorPromocion.route('/triana_promocion/:codigo_triana_promocion').delete(promocionController.eliminarTrianaPromocion); //elimina datos de la base de datos
enrutadorPromocion.route('/triana_promocion/:codigo_triana_promocion').put(promocionController.actualizarTrianaPromocion); //actualiza datos de la base de datos
enrutadorPromocion.route('/triana_promocion/:codigo_triana_promocion').get(promocionController.obtenerUnTrianaPromocion); //obtiene un valor de a bae de atos
export default enrutadorPromocion;

