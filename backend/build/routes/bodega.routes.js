"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bodega_controller_1 = require("../controllers/bodega.controller");
let trianaController = new bodega_controller_1.BodegaController();
const enrutadorBodega = express_1.Router();
enrutadorBodega.route('/triana_bodega').get(trianaController.listarTrianaBodega); //obtener datos y mostrarlo
enrutadorBodega.route('/triana_bodega').post(trianaController.guardarTrianaBodega); //guardar datos en la base de datos
enrutadorBodega.route('/triana_bodega/:codigo_triana_bodega').delete(trianaController.eliminarTrianaBodega); //elimina datos de la base de datos
enrutadorBodega.route('/triana_bodega/:codigo_triana_bodega').put(trianaController.actualizarTrianaBodega); //actualiza datos de la base de datos
enrutadorBodega.route('/triana_bodega/:codigo_triana_bodega').get(trianaController.obtenerUnTrianaBodega); //obtiene un valor de a bae de atos
exports.default = enrutadorBodega;
