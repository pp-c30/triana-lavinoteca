"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const verificarToken_1 = require("../libs/verificarToken");
let productoController = new producto_controller_1.ProductoController();
const enrutadorProducto = express_1.Router();
enrutadorProducto.route('/triana_producto').get(verificarToken_1.validarToken, productoController.listarTrianaProducto); //obtener datos y mostrarlo
enrutadorProducto.route('/triana_producto').post(multer_1.default.single('img'), productoController.guardarTrianaProducto); //guardar datos en la base de datos
enrutadorProducto.route('/triana_producto/:id/:public_id').delete(productoController.eliminarTrianaProducto); //elimina datos de la base de datos
enrutadorProducto.route('/triana_producto/:id').put(multer_1.default.single('img'), productoController.actualizarTrianaPoducto); //actualiza datos de la base de datos
enrutadorProducto.route('/triana_producto/:id_producto').get(productoController.obtenerUnTrianaProducto); //obtiene un valor de a bae de atos
exports.default = enrutadorProducto;
