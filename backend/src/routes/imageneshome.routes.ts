import { Router } from "express";
import { ImagenesHomeController } from "../controllers/imageneshome.controller";

let trianaController = new ImagenesHomeController();

const enrutadorImagenesHome = Router();

enrutadorImagenesHome.route('/triana_imageneshome').post(trianaController.guardarTrianaImagenesHome); //guardar datos en la base de datos

export default enrutadorImagenesHome;

