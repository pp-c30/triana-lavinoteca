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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const bodega_routes_1 = __importDefault(require("./routes/bodega.routes"));
const categoria_routes_1 = __importDefault(require("./routes/categoria.routes"));
const descuento_routes_1 = __importDefault(require("./routes/descuento.routes"));
const imageneshome_routes_1 = __importDefault(require("./routes/imageneshome.routes"));
const opinion_routes_1 = __importDefault(require("./routes/opinion.routes"));
const producto_routes_1 = __importDefault(require("./routes/producto.routes"));
const promocion_routes_1 = __importDefault(require("./routes/promocion.routes"));
const variedad_routes_1 = __importDefault(require("./routes/variedad.routes"));
const autenticacion_routes_1 = __importDefault(require("./routes/autenticacion.routes"));
const path_1 = __importDefault(require("path"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.configuracion();
        this.middleware();
        this.routes();
    }
    configuracion() {
        this.app.set('port', process.env.port || 3000);
    }
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use(bodega_routes_1.default);
        this.app.use(categoria_routes_1.default);
        this.app.use(descuento_routes_1.default);
        this.app.use(imageneshome_routes_1.default);
        //se configura el server para que pueda leer esta carpeta y leer las imagenes
        this.app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
        this.app.use(opinion_routes_1.default);
        this.app.use(producto_routes_1.default);
        this.app.use(promocion_routes_1.default);
        this.app.use(variedad_routes_1.default);
        this.app.use(autenticacion_routes_1.default);
    }
    middleware() {
        //muestreo de las peticiones
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        //configuracion que le permitirá a nuestro servidor recibir y enviar datos en formato JSON
        this.app.use(express_1.default.json());
    }
    //Corre el servidor por un puerto elegido
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('Servidor corriendo en el puerto 3000');
        });
    }
}
exports.Server = Server;
