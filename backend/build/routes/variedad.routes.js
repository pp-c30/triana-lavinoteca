"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const variedad_controller_1 = require("../controllers/variedad.controller");
let trianaController = new variedad_controller_1.VariedadController();
const enrutadorVariedad = express_1.Router();
enrutadorVariedad.route('/triana_variedad').get(trianaController.listarTrianaVariedad); //obtener datos y mostrarlo
enrutadorVariedad.route('/triana_variedad').post(trianaController.guardarTrianaVariedad); //guardar datos en la base de datos
enrutadorVariedad.route('/triana_variedad/:codigo_triana_variedad').put(trianaController.actualizarTrianaVariedad); //actualiza datos de la base de datos
enrutadorVariedad.route('/triana_variedad/:codigo_triana_variedad').get(trianaController.obtenerUnTrianaVariedad); //obtiene un valor de a bae de atos
exports.default = enrutadorVariedad;
