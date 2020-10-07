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
exports.OpinionController = void 0;
const database_1 = require("../database");
class OpinionController {
    //Listado de producto
    listarTrianaProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //aca logro la conexión con la base de datos
            const db = yield database_1.conexion();
            let triana_opinion = yield db.query('select * from opinion');
            return res.json(triana_opinion);
        });
    }
    //guardar opinion
    guardarTrianaOpinion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            const triana_opinion = req.body;
            yield db.query("insert into opinion set ?", [triana_opinion]);
            return res.json('La opinion fue guardada exitosamente');
        });
    }
    //eliminar opinion
    eliminarTrianaOpinion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_opinion = req.params.codigo_triana_opinion;
            yield db.query("delete from opinion where id_opinion = ?", [codigo_triana_opinion]);
            return res.json('La opinion se eliminó correctamente');
        });
    }
}
exports.OpinionController = OpinionController;