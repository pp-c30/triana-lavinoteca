import { Router } from "express";
import { CategoriaController } from "../controllers/categoria.controllers";

let trianaController = new CategoriaController();

const enrutadorTriana = Router();

enrutadorTriana.route('/triana_categoria').get(trianaController.listarTrianaCategoria); //obtener datos y mostrarlo
enrutadorTriana.route('/triana_categoria').post(trianaController.guardarTrianaCategoria); //guardar datos en la base de datos
enrutadorTriana.route('/triana_categoria/:codigo_triana_categoria').delete(trianaController.eliminarTrianaCategoria); //elimina datos de la base de datos
enrutadorTriana.route('/triana_categoria/:codigo_triana_categoria').put(trianaController.actualizarTrianaCategoria); //actualiza datos de la base de datos
enrutadorTriana.route('/triana_categoria/:codigo_triana_categoria').get(trianaController.obtenerUnTrianaCategoria); //obtiene un valor de a bae de atos
export default enrutadorTriana;

