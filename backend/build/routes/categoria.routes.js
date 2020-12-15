"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = require("../controllers/categoria.controller");
const verificarToken_1 = require("../libs/verificarToken");
let categoriaController = new categoria_controller_1.CategoriaController();
const enrutadorCategoria = express_1.Router();
enrutadorCategoria.route('/triana_categoria').get(verificarToken_1.validarToken, categoriaController.listarTrianaCategoria); //obtener datos y mostrarlo
enrutadorCategoria.route('/triana_categoria').post(categoriaController.guardarTrianaCategoria); //guardar datos en la base de datos
enrutadorCategoria.route('/triana_categoria/:codigo_triana_categoria').delete(categoriaController.eliminarTrianaCategoria); //elimina datos de la base de datos
enrutadorCategoria.route('/triana_categoria/:codigo_triana_categoria').put(categoriaController.actualizarTrianaCategoria); //actualiza datos de la base de datos
enrutadorCategoria.route('/triana_categoria/:codigo_triana_categoria').get(categoriaController.obtenerUnTrianaCategoria); //obtiene un valor de a bae de atos
exports.default = enrutadorCategoria;
