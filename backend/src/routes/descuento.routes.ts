import { Router } from "express";
import { DescuentoController } from "../controllers/descuento.controllers";

let trianaController = new DescuentoController();

const enrutadorDescuento = Router();

enrutadorDescuento.route('/triana_descuento').get(trianaController.listarTrianaDescuento); //obtener datos y mostrarlo
enrutadorDescuento.route('/triana_descuento').post(trianaController.guardarTrianaDescuento); //guardar datos en la base de datos
//enrutadorDescuento.route('/triana_descuento/:codigo_triana_descuento').delete(trianaController.eliminarTrianaDescuento); //elimina datos de la base de datos
enrutadorDescuento.route('/triana_descuento/:codigo_triana_descuento').put(trianaController.actualizarTrianaDescuento); //actualiza datos de la base de datos
enrutadorDescuento.route('/triana_descuento/:codigo_triana_descuento').get(trianaController.obtenerUnTrianaDescuento); //obtiene un valor de a bae de atos
export default enrutadorDescuento;

