"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageneshome_controller_1 = require("../controllers/imageneshome.controller");
const multer_1 = __importDefault(require("../libs/multer"));
let trianaController = new imageneshome_controller_1.ImagenesHomeController();
const enrutadorImagenesHome = express_1.Router();
enrutadorImagenesHome.route('/triana_imageneshome').post(multer_1.default.single('img'), trianaController.guardarTrianaImagenesHome); //guardar datos en la base de datos
exports.default = enrutadorImagenesHome;
