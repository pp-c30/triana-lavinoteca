import { Router } from "express";
import { ImagenesHomeController } from "../controllers/imageneshome.controller";
import multer from "../libs/multer";

let imagenesHomeController = new ImagenesHomeController();

const enrutadorImagenesHome = Router();

enrutadorImagenesHome.route('/triana_imageneshome').post(multer.single('img'),imagenesHomeController.guardarTrianaImagenesHome); //guardar datos en la base de datos
enrutadorImagenesHome.route('/triana_imageneshome').get(imagenesHomeController.listarTrianaImagenesHome);

export default enrutadorImagenesHome;
