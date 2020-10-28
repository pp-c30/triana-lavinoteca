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
class VariedadController {
    //listar variedad
    listarTrianaVariedad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //aca logro la conexión con la base de datos
            const db = yield database_1.conexion();
            let triana_variedad = yield db.query('select * from variedad');
            return res.json(triana_variedad);
        });
    }
    //guardar una variedad
    guardarTrianaVariedad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            const triana_variedad = req.body;
            yield db.query("insert into variedad set ?", [triana_variedad]);
            return res.json('La variedad fue guardada exitosamente');
        });
    }
    //actualizar una variedad
    actualizarTrianaVariedad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_variedad = req.params.codigo_triana_variedad;
            let nuevos_datos_variedad = req.body;
            yield db.query("update variedad set ? where id_varie = ?", [nuevos_datos_variedad, codigo_triana_variedad]);
            return res.json('Se actualizo exitosamente');
        });
    }
    //obtener una variedad
    obtenerUnTrianaVariedad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_variedad = req.params.codigo_triana_variedad;
            let unaVariedad = yield db.query("select * from variedad where id_varie = ?", [codigo_triana_variedad]);
            return res.json(unaVariedad[0]);
        });
    }
}
exports.VariedadController = VariedadController;
