"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageneshome_controller_1 = require("../controllers/imageneshome.controller");
let trianaController = new imageneshome_controller_1.ImagenesHomeController();
const enrutadorImagenesHome = express_1.Router();
enrutadorImagenesHome.route('/triana_imageneshome').post(trianaController.guardarTrianaImagenesHome); //guardar datos en la base de datos
exports.default = enrutadorImagenesHome;
