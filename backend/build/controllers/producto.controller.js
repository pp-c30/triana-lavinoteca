"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoController = void 0;
const database_1 = require("../database");
class ProductoController {
    //Listado de producto
    listarTrianaProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //aca logro la conexión con la base de datos
            const db = yield database_1.conexion();
            let triana_producto = yield db.query('select * from producto');
            return res.json(triana_producto);
        });
    }
    //Guardar producto
    guardarTrianaProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            const triana_producto = req.body;
            yield db.query("insert into producto set ?", [triana_producto]);
            return res.json('El producto fue guardado exitosamente');
        });
    }
    //actualizar producto
    actualizarTrianaPoducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_producto = req.params.codigo_triana_producto;
            let nuevos_datos_producto = req.body;
            yield db.query("update producto set ? where id_producto = ?", [nuevos_datos_producto, codigo_triana_producto]);
            return res.json('Se actualizo exitosamente');
        });
    }
    //Obtener un producto 
    obtenerUnTrianaProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_producto = req.params.codigo_triana_producto;
            let unProducto = yield db.query("select * from producto where id_producto = ?", [codigo_triana_producto]);
            return res.json(unProducto[0]);
        });
    }
}
exports.ProductoController = ProductoController;
