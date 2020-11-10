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
const database_1 = require("../database");
class CategoriaController {
    //listar categoria
    listarTrianaCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //aca se logro la conexión con la base de datos
            const db = yield database_1.conexion();
            let triana_categoria = yield db.query("select * from categoria");
            return res.json(triana_categoria);
        });
    }
    //guardar una categoria
    guardarTrianaCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            const triana_categoria = req.body;
            yield db.query("insert into categoria set ?", [triana_categoria]);
            return res.json('la categoria fue guardada exitosamente');
        });
    }
    //eliminar una categoria 
    eliminarTrianaCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_categoria = req.params.codigo_triana_categoria;
            yield db.query("delete from categoria where id_categoria = ?", [codigo_triana_categoria]);
            return res.json('La categoria se eliminó correctamente');
        });
    }
    //actualizar una categoria
    actualizarTrianaCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_categoria = req.params.codigo_triana_categoria;
            let nuevos_datos_categoria = req.body;
            yield db.query("update categoria set ? where id_categoria = ?", [nuevos_datos_categoria, codigo_triana_categoria]);
            return res.json('Se actualizo exitosamente');
        });
    }
    //obtener una categoria
    obtenerUnTrianaCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_categoria = req.params.codigo_triana_categoria;
            let unaCategoria = yield db.query("select * from categoria where id_categoria = ?", [codigo_triana_categoria]);
            return res.json(unaCategoria[0]);
        });
    }
}
exports.CategoriaController = CategoriaController;
