import { Router } from "express";
import { ProductoController } from "../controllers/producto.controller";
import multer from "../libs/multer";
import { validarToken } from "../libs/verificarToken";

let productoController = new ProductoController();

const enrutadorProducto = Router();

enrutadorProducto.route('/triana_producto').get(productoController.listarTrianaProducto); //obtener datos y mostrarlo
enrutadorProducto.route('/triana_producto').post(multer.single('img'),productoController.guardarTrianaProducto); //guardar datos en la base de datos
enrutadorProducto.route('/triana_producto/:codigo_triana_producto').delete(productoController.eliminarTrianaProducto); //elimina datos de la base de datos
enrutadorProducto.route('/triana_producto/:codigo_triana_producto').put(productoController.actualizarTrianaPoducto); //actualiza datos de la base de datos
enrutadorProducto.route('/triana_producto/:id_producto').get(productoController.obtenerUnTrianaProducto); //obtiene un valor de a bae de atos
export default enrutadorProducto;

