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
class PromocionesController {
    //listar una promocion
    listarTrianaPromociones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //aca se logro la conexión con la base de datos
            const db = yield database_1.conexion();
            let triana_promociones = yield db.query("select * from promociones");
            return res.json(triana_promociones);
        });
    }
    //guardar una promocion
    guardarTrianaPromociones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            const triana_promociones = req.body;
            yield db.query("insert into promociones set ?", [triana_promociones]);
            return res.json('la promocion fue guardada exitosamente');
        });
    }
    //eliminar una promocion
    eliminarTrianaPromociones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_promociones = req.params.codigo_triana_promociones;
            yield db.query("delete from promociones where id_promo = ?", [codigo_triana_promociones]);
            return res.json('La promocion se eliminó correctamente');
        });
    }
    //actulizar una promocion
    actualizarTrianaPromociones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_promociones = req.params.codigo_triana_promociones;
            let nuevos_datos_promociones = req.body;
            yield db.query("update promociones set ? where id_promo = ?", [nuevos_datos_promociones, codigo_triana_promociones]);
            return res.json('Se actualizo exitosamente');
        });
    }
    //obtener una promocion
    obtenerUnTrianaPromociones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_promociones = req.params.codigo_triana_promociones;
            let unaPromocion = yield db.query("select * from promociones where id_promo = ?", [codigo_triana_promociones]);
            return res.json(unaPromocion[0]);
        });
    }
}
exports.PromocionesController = PromocionesController;
