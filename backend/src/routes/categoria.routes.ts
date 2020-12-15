import { Router } from "express";
import { CategoriaController } from "../controllers/categoria.controller";
import { validarToken } from "../libs/verificarToken";

let categoriaController = new CategoriaController();

const enrutadorCategoria = Router();

enrutadorCategoria.route('/triana_categoria').get(validarToken,categoriaController.listarTrianaCategoria); //obtener datos y mostrarlo
enrutadorCategoria.route('/triana_categoria').post(categoriaController.guardarTrianaCategoria); //guardar datos en la base de datos
enrutadorCategoria.route('/triana_categoria/:codigo_triana_categoria').delete(categoriaController.eliminarTrianaCategoria); //elimina datos de la base de datos
enrutadorCategoria.route('/triana_categoria/:codigo_triana_categoria').put(categoriaController.actualizarTrianaCategoria); //actualiza datos de la base de datos
enrutadorCategoria.route('/triana_categoria/:codigo_triana_categoria').get(categoriaController.obtenerUnTrianaCategoria); //obtiene un valor de a bae de atos
export default enrutadorCategoria;

