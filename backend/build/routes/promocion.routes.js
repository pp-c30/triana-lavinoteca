"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const promocion_controller_1 = require("../controllers/promocion.controller");
const verificarToken_1 = require("../libs/verificarToken");
let promocionController = new promocion_controller_1.PromocionController();
const enrutadorPromocion = express_1.Router();
enrutadorPromocion.route('/triana_promocion').get(verificarToken_1.validarToken, promocionController.listarTrianaPromocion); //obtener datos y mostrarlo
enrutadorPromocion.route('/triana_promocion').post(promocionController.guardarTrianaPromocion); //guardar datos en la base de datos
enrutadorPromocion.route('/triana_promocion/:codigo_triana_promocion').delete(promocionController.eliminarTrianaPromocion); //elimina datos de la base de datos
enrutadorPromocion.route('/triana_promocion/:codigo_triana_promocion').put(promocionController.actualizarTrianaPromocion); //actualiza datos de la base de datos
enrutadorPromocion.route('/triana_promocion/:codigo_triana_promocion').get(promocionController.obtenerUnTrianaPromocion); //obtiene un valor de a bae de atos
exports.default = enrutadorPromocion;
