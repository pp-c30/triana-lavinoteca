import { Router } from "express";
import { ImagenesHomeController } from "../controllers/imageneshome.controller";
import multer from "../libs/multer";

let imagenesHomeController = new ImagenesHomeController();

const enrutadorImagenesHome = Router();

enrutadorImagenesHome.route('/triana_imageneshome').post(multer.single('img'),imagenesHomeController.guardarTrianaImagenesHome); //guardar datos en la base de datos

enrutadorImagenesHome.route('/triana_imageneshome/:id').put(multer.single('img'), imagenesHomeController.actualizarTrianaImagenesHome);//actualizar datos de la base de datos

enrutadorImagenesHome.route('/triana_imageneshome').get(imagenesHomeController.listarTrianaImagenesHome); //listar datos de la base de datos

enrutadorImagenesHome.route('/triana_imageneshome/:id/:public_id').delete(imagenesHomeController.eliminarImagenesHome);// Elimina los datos y la imagen de la base de datos y cloudinary

export default enrutadorImagenesHome;
