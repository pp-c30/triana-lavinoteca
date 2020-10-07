import { Router } from "express";
import { ProductoController } from "../controllers/producto.controller";
import multer from "../libs/multer";

let trianaController = new ProductoController();

const enrutadorProducto = Router();

enrutadorProducto.route('/triana_producto').get(trianaController.listarTrianaProducto); //obtener datos y mostrarlo
enrutadorProducto.route('/triana_producto').post(multer.single('img'),trianaController.guardarTrianaProducto); //guardar datos en la base de datos
enrutadorProducto.route('/triana_producto/:codigo_triana_producto').put(trianaController.actualizarTrianaPoducto); //actualiza datos de la base de datos
enrutadorProducto.route('/triana_producto/:codigo_triana_producto').get(trianaController.obtenerUnTrianaProducto); //obtiene un valor de a bae de atos
export default enrutadorProducto;

