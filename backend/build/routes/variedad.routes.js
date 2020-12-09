"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const variedad_controller_1 = require("../controllers/variedad.controller");
let variedadController = new variedad_controller_1.VariedadController();
const enrutadorVariedad = express_1.Router();
enrutadorVariedad.route('/triana_variedad').get(variedadController.listarTrianaVariedad); //obtener datos y mostrarlo
enrutadorVariedad.route('/triana_variedad/:id_categoria').get(variedadController.listarTrianaVariedadPorCategoria); //obtener datos y mostrarlo
enrutadorVariedad.route('/triana_variedad').post(variedadController.guardarTrianaVariedad); //guardar datos en la base de datos
enrutadorVariedad.route('/triana_variedad/:codigo_triana_variedad').delete(variedadController.eliminarTrianaVariedad); //elimina datos de la base de datos
enrutadorVariedad.route('/triana_variedad/:codigo_triana_variedad').put(variedadController.actualizarTrianaVariedad); //actualiza datos de la base de datos
enrutadorVariedad.route('/triana_variedad/:codigo_triana_variedad').get(variedadController.obtenerUnTrianaVariedad); //obtiene un valor de a bae de atos
exports.default = enrutadorVariedad;
