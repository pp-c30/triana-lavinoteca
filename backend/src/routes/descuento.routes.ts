import { Router } from "express";
import { DescuentoController } from "../controllers/descuento.controller";

let descuentoController = new DescuentoController();

const enrutadorDescuento = Router();

enrutadorDescuento.route('/triana_descuento').get(descuentoController.listarTrianaDescuento); //obtener datos y mostrarlo
enrutadorDescuento.route('/triana_descuento').post(descuentoController.guardarTrianaDescuento); //guardar datos en la base de dato
enrutadorDescuento.route('/triana_descuento/:codigo_triana_descuento').delete(descuentoController.eliminarTrianaDescuento); //elimina datos de la base de datos
enrutadorDescuento.route('/triana_descuento/:codigo_triana_descuento').put(descuentoController.actualizarTrianaDescuento); //actualiza datos de la base de datos
enrutadorDescuento.route('/triana_descuento/:codigo_triana_descuento').get(descuentoController.obtenerUnTrianaDescuento); //obtiene un valor de a bae de atos
export default enrutadorDescuento;

