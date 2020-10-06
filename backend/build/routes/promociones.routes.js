"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const promociones_controller_1 = require("../controllers/promociones.controller");
let trianaController = new promociones_controller_1.PromocionesController();
const enrutadorPromociones = express_1.Router();
enrutadorPromociones.route('/triana_promociones').get(trianaController.listarTrianaPromociones); //obtener datos y mostrarlo
enrutadorPromociones.route('/triana_promociones').post(trianaController.guardarTrianaPromociones); //guardar datos en la base de datos
enrutadorPromociones.route('/triana_promociones/:codigo_triana_promociones').delete(trianaController.eliminarTrianaPromociones); //elimina datos de la base de datos
enrutadorPromociones.route('/triana_promociones/:codigo_triana_promociones').put(trianaController.actualizarTrianaPromociones); //actualiza datos de la base de datos
enrutadorPromociones.route('/triana_promociones/:codigo_triana_promociones').get(trianaController.obtenerUnTrianaPromociones); //obtiene un valor de a bae de atos
exports.default = enrutadorPromociones;
