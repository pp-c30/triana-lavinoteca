import { Router } from "express";
import { CategoriaController } from "../controllers/categoria.controller";

let trianaController = new CategoriaController();

const enrutadorCategoria = Router();

enrutadorCategoria.route('/triana_categoria').get(trianaController.listarTrianaCategoria); //obtener datos y mostrarlo
enrutadorCategoria.route('/triana_categoria').post(trianaController.guardarTrianaCategoria); //guardar datos en la base de datos
enrutadorCategoria.route('/triana_categoria/:codigo_triana_categoria').delete(trianaController.eliminarTrianaCategoria); //elimina datos de la base de datos
enrutadorCategoria.route('/triana_categoria/:codigo_triana_categoria').put(trianaController.actualizarTrianaCategoria); //actualiza datos de la base de datos
enrutadorCategoria.route('/triana_categoria/:codigo_triana_categoria').get(trianaController.obtenerUnTrianaCategoria); //obtiene un valor de a bae de atos
export default enrutadorCategoria;

