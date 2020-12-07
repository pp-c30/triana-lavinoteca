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
            const url_img = req.file.path;
            //fuimos a buscar la imagen a la carpeta upload para subirla a cloudinary
            const resultado_cloud = yield cloudinary_1.default.v2.uploader.upload(req.file.path);
            //se guardan datos en la base
            const guardarImagen = {
                nombre: req.body.nombre,
                categoria: req.body.categoria,
                stock: req.body.stock,
                precio: req.body.precio,
                imagen: resultado_cloud.url,
                public_id: resultado_cloud.public_id,
                bodega: req.body.bodega,
                descripcion: req.body.descripcion,
                cantmil: req.body.cantmil,
                estado: req.body.estado,
                variedad: req.body.variedad
            };
            yield db.query('insert into producto set ?', [guardarImagen]);
            fs_extra_1.default.unlink(req.file.path);
            res.json('Se guardo exitosamente los datos y la imagen');
        });
    }
    //eliminar un producto
    eliminarTrianaProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo_triana_producto = req.params.codigo_triana_producto;
            try {
                yield db.query("delete from producto where id_producto = ?", [codigo_triana_producto]);
                return res.json('El producto se eliminó correctamente');
            }
            catch (error) {
                return res.json('No se pudo eliminar el producto, ya que esta siendo utilizado por una opinión y/o promoción');
            }
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
            let id_producto = req.params.id_producto;
            const unProducto = yield db.query("select * from producto where id_producto = ?", [id_producto]);
            return res.json(unProducto[0]);
        });
    }
}
exports.ProductoController = ProductoController;
