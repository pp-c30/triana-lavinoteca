"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageneshome_controller_1 = require("../controllers/imageneshome.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const verificarToken_1 = require("../libs/verificarToken");
let imagenesHomeController = new imageneshome_controller_1.ImagenesHomeController();
const enrutadorImagenesHome = express_1.Router();
enrutadorImagenesHome.route('/triana_imageneshome').post(multer_1.default.single('img'), imagenesHomeController.guardarTrianaImagenesHome); //guardar datos en la base de datos
enrutadorImagenesHome.route('/triana_imageneshome/:id').put(multer_1.default.single('img'), imagenesHomeController.actualizarTrianaImagenesHome); //actualizar datos de la base de datos
enrutadorImagenesHome.route('/triana_imageneshome').get(verificarToken_1.validarToken, imagenesHomeController.listarTrianaImagenesHome); //listar datos de la base de datos
enrutadorImagenesHome.route('/triana_imageneshome/:id/:public_id').delete(imagenesHomeController.eliminarImagenesHome); // Elimina los datos y la imagen de la base de datos y cloudinary
enrutadorImagenesHome.route('/triana_imageneshome/:id_imagen').get(imagenesHomeController.obtenerUnTrianaImagenesHome); //obtiene un valor de a bae de atos
exports.default = enrutadorImagenesHome;
