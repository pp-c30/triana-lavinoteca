"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
const multer_1 = __importDefault(require("../libs/multer"));
let productoController = new producto_controller_1.ProductoController();
const enrutadorProducto = express_1.Router();
enrutadorProducto.route('/triana_producto').get(productoController.listarTrianaProducto); //obtener datos y mostrarlo
enrutadorProducto.route('/triana_producto').post(multer_1.default.single('img'), productoController.guardarTrianaProducto); //guardar datos en la base de datos
enrutadorProducto.route('/triana_producto/:codigo_triana_producto').delete(productoController.eliminarTrianaProducto); //elimina datos de la base de datos
enrutadorProducto.route('/triana_producto/:codigo_triana_producto').put(productoController.actualizarTrianaPoducto); //actualiza datos de la base de datos
enrutadorProducto.route('/triana_producto/:codigo_triana_producto').get(productoController.obtenerUnTrianaProducto); //obtiene un valor de a bae de atos
exports.default = enrutadorProducto;
