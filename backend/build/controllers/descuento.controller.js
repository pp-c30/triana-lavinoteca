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
class DescuentoController {
    //listar descuento
    listarTrianaDescuento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //aca se logro la conexión con la base de datos
            const db = yield database_1.conexion();
            let triana_descuento = yield db.query("select * from descuento");
            return res.json(triana_descuento);
        });
    }
    //guardar un descuento
    guardarTrianaDescuento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            const triana_descuento = req.body;
            yield db.query("insert into descuento set ?", [triana_descuento]);
            return res.json('el descuento fue guardado exitosamente');
        });
    }
    //eliminar un descuento
    eliminarTrianaDescuento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_descuento = req.params.codigo_triana_descuento;
            yield db.query("delete from descuento where id_des = ?", [codigo_triana_descuento]);
            return res.json('El descuento se eliminó correctamente');
        });
    }
    //actualizar un descuento
    actualizarTrianaDescuento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_descuento = req.params.codigo_triana_descuento;
            let nuevos_datos_descuento = req.body;
            yield db.query("update descuento set ? where id_des = ?", [nuevos_datos_descuento, codigo_triana_descuento]);
            return res.json('Se actualizo exitosamente');
        });
    }
    //obtener un descuento
    obtenerUnTrianaDescuento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_descuento = req.params.codigo_triana_descuento;
            let unDescuento = yield db.query("select * from descuento where id_des = ?", [codigo_triana_descuento]);
            return res.json(unDescuento[0]);
        });
    }
}
exports.DescuentoController = DescuentoController;
