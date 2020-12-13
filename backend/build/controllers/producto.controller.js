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
            let triana_producto = yield db.query(`SELECT p.*, d.porcentaje, d.descripcion as descripcion_descuento, v.id_varie as id_varie, v.descripcion as descripcion_variedad, c.id_categoria as id_cat, c.descripcion as descripcion_categoria, b.id_bodega as id_bod, b.descripcion as descripcion_bodega FROM producto p 
        LEFT JOIN variedad v ON p.variedad = v.id_varie
        LEFT JOIN categoria c ON p.categoria = c.id_categoria
        LEFT JOIN bodega b ON  p.bodega = b.id_bodega
        LEFT JOIN promociones pr ON p.id_producto = pr.producto
        LEFT JOIN descuento d ON pr.descuento = d.id_des`);
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
                categoria: Number(req.body.categoria),
                stock: Number(req.body.stock),
                precio: Number(req.body.precio),
                imagen: resultado_cloud.url,
                public_id: resultado_cloud.public_id,
                bodega: Number(req.body.bodega),
                descripcion: req.body.descripcion,
                cantmil: Number(req.body.cantmil),
                estado: Number(req.body.estado),
                variedad: Number(req.body.variedad)
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
            let id = req.params.id;
            let public_id = req.params.public_id;
            try {
                // eliminamos la imagen de cloudinary
                yield cloudinary_1.default.v2.uploader.destroy(public_id);
                // eliminamos registro en la base
                yield db.query("delete from producto where id_producto = ?", [id]);
                res.json('Se elimino exitosamente el registro');
            }
            catch (error) {
                return res.json('No se pudo eliminar el producto, ya que esta siendo utilizado por una opinión y/o promoción');
            }
        });
    }
    //actualizar producto
    actualizarTrianaPoducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield database_1.conexion();
                let id = req.params.id;
                var updateProducto;
                var public_id_anterior = req.body.public_id;
                if (req.file) {
                    // Se sube imagen a cloudinary y se genera un public id
                    const resultado_cloud = yield cloudinary_1.default.v2.uploader.upload(req.file.path);
                    updateProducto = {
                        nombre: req.body.nombre,
                        categoria: Number(req.body.categoria),
                        stock: Number(req.body.stock),
                        precio: Number(req.body.precio),
                        imagen: resultado_cloud.url,
                        public_id: resultado_cloud.public_id,
                        bodega: Number(req.body.bodega),
                        descripcion: req.body.descripcion,
                        cantmil: Number(req.body.cantmil),
                        estado: Number(req.body.estado),
                        variedad: Number(req.body.variedad)
                    };
                    yield db.query('update producto set ? where id_producto = ?', [updateProducto, id]);
                    fs_extra_1.default.unlink(req.file.path);
                    yield cloudinary_1.default.v2.uploader.destroy(public_id_anterior);
                }
                else {
                    updateProducto = {
                        nombre: req.body.nombre,
                        categoria: Number(req.body.categoria),
                        stock: Number(req.body.stock),
                        precio: Number(req.body.precio),
                        bodega: Number(req.body.bodega),
                        descripcion: req.body.descripcion,
                        cantmil: Number(req.body.cantmil),
                        estado: Number(req.body.estado),
                        variedad: Number(req.body.variedad)
                    };
                    yield db.query('update producto set ? where id_producto = ?', [updateProducto, id]);
                }
                res.json('Se actualizó exitosamente!');
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    //Obtener un producto 
    obtenerUnTrianaProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id_producto = req.params.id_producto;
            const unProducto = yield db.query("select p.*, v.descripcion as descripcion_variedad, c.descripcion as descripcion_categoria, b.descripcion as descripcion_bodega from producto p, variedad v, categoria c, bodega b where p.variedad = v.id_varie and p.categoria = c.id_categoria and p.bodega = b.id_bodega and id_producto = ?", [id_producto]);
            return res.json(unProducto[0]);
        });
    }
}
exports.ProductoController = ProductoController;
