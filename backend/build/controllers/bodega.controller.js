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
exports.BodegaController = void 0;
const database_1 = require("../database");
class BodegaController {
    //listado de bodega
    listarTrianaBodega(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //aca se logro la conexión con la base de datos
            const db = yield database_1.conexion();
            let triana_bodega = yield db.query("select * from bodega");
            return res.json(triana_bodega);
        });
    }
    //guardar bodega
    guardarTrianaBodega(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            const triana_bodega = req.body;
            yield db.query("insert into bodega set ?", [triana_bodega]);
            return res.json('la bodega fue guardada exitosamente');
        });
    }
    //eliminar bodega
    eliminarTrianaBodega(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_bodega = req.params.codigo_triana_bodega;
            yield db.query("delete from bodega where id_bodega = ?", [codigo_triana_bodega]);
            return res.json('La bodega se eliminó correctamente');
        });
    }
    //actualizar bodega
    actualizarTrianaBodega(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_bodega = req.params.codigo_triana_bodega;
            let nuevos_datos_bodega = req.body;
            yield db.query("update bodega set ? where id_bodega = ?", [nuevos_datos_bodega, codigo_triana_bodega]);
            return res.json('Se actualizo exitosamente');
        });
    }
    //obtener una bodega
    obtenerUnTrianaBodega(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_bodega = req.params.codigo_triana_bodega;
            let unaBodega = yield db.query("select * from bodega where id_bodega = ?", [codigo_triana_bodega]);
            return res.json(unaBodega[0]);
        });
    }
}
exports.BodegaController = BodegaController;
