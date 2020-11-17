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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const cloudinary_1 = __importDefault(require("cloudinary"));
const fs_extra_1 = __importDefault(require("fs-extra"));
cloudinary_1.default.v2.config({
    cloud_name: 'dmutxyaog',
    api_key: '665112836568814',
    api_secret: 'eR6juzj8BGCBSxNldixJU1sM_ds',
});
class ImagenesHomeController {
    //operaciones CRUD 
    guardarTrianaImagenesHome(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            const url_img = req.file.path;
            //fuimos a buscar la imagen a la carpeta upload para subirla a cloudinary
            const resultado_cloud = yield cloudinary_1.default.v2.uploader.upload(req.file.path);
            //se guardan datos en la base
            const guardarImagenesHome = {
                nombre: req.body.nombre,
                estado: req.body.estado,
                imagen_url: resultado_cloud.url,
                public_id: resultado_cloud.public_id
            };
            yield db.query('insert into imageneshome set ?', [guardarImagenesHome]);
            fs_extra_1.default.unlink(req.file.path);
            res.json('Se guardo exitosamente los datos y la imagen');
        });
    }
    listarTrianaImagenesHome(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let lista = yield db.query('select * from imageneshome');
            res.json(lista);
        });
    }
}
exports.ImagenesHomeController = ImagenesHomeController;
