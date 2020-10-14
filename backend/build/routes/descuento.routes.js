"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const descuento_controller_1 = require("../controllers/descuento.controller");
let trianaController = new descuento_controller_1.DescuentoController();
const enrutadorDescuento = express_1.Router();
enrutadorDescuento.route('/triana_descuento').get(trianaController.listarTrianaDescuento); //obtener datos y mostrarlo
enrutadorDescuento.route('/triana_descuento').post(trianaController.guardarTrianaDescuento); //guardar datos en la base de dato
enrutadorDescuento.route('/triana_categoria/:codigo_triana_descuento').delete(trianaController.eliminarTrianaDescuento); //elimina datos de la base de datos
enrutadorDescuento.route('/triana_descuento/:codigo_triana_descuento').put(trianaController.actualizarTrianaDescuento); //actualiza datos de la base de datos
enrutadorDescuento.route('/triana_descuento/:codigo_triana_descuento').get(trianaController.obtenerUnTrianaDescuento); //obtiene un valor de a bae de atos
exports.default = enrutadorDescuento;
