"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const descuento_controller_1 = require("../controllers/descuento.controller");
const verificarToken_1 = require("../libs/verificarToken");
let descuentoController = new descuento_controller_1.DescuentoController();
const enrutadorDescuento = express_1.Router();
enrutadorDescuento.route('/triana_descuento').get(verificarToken_1.validarToken, descuentoController.listarTrianaDescuento); //obtener datos y mostrarlo
enrutadorDescuento.route('/triana_descuento').post(descuentoController.guardarTrianaDescuento); //guardar datos en la base de dato
enrutadorDescuento.route('/triana_descuento/:codigo_triana_descuento').delete(descuentoController.eliminarTrianaDescuento); //elimina datos de la base de datos
enrutadorDescuento.route('/triana_descuento/:codigo_triana_descuento').put(descuentoController.actualizarTrianaDescuento); //actualiza datos de la base de datos
enrutadorDescuento.route('/triana_descuento/:codigo_triana_descuento').get(descuentoController.obtenerUnTrianaDescuento); //obtiene un valor de a bae de atos
exports.default = enrutadorDescuento;
