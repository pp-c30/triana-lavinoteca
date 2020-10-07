import express, { Application } from "express";
import morgan from 'morgan';
import cors from 'cors';
import enrutadorIndex from "./routes/index.routes";
import enrutadorBodega from "./routes/bodega.routes";
import enrutadorCategoria from "./routes/categoria.routes";
import enrutadorDescuento from "./routes/descuento.routes";
import enrutadorImagenesHome from "./routes/imageneshome.routes";
import enrutadorOpinion from "./routes/opinion.routes";
import enrutadorProducto from "./routes/producto.routes";
import enrutadorPromociones from "./routes/promociones.routes";
import enrutadorVariedad from "./routes/variedad.routes";
import path from 'path';

export class Server {
    app:Application;

    constructor()
    {
        this.app=express();
        this.configuracion();
        this.middleware();
        this.routes();
    }

    configuracion()
    {
        this.app.set('port', process.env.port || 3000);
    }

    routes()
    {
        this.app.use(enrutadorIndex);
        this.app.use(enrutadorBodega);
        this.app.use(enrutadorCategoria);
        this.app.use(enrutadorDescuento);
        this.app.use(enrutadorImagenesHome);
        //se configura el server para que pueda leer esta carpeta y leer las imagenes
        this.app.use('/uploads', express.static(path.resolve('uploads')));
        this.app.use(enrutadorOpinion);
        this.app.use(enrutadorProducto);
        this.app.use(enrutadorPromociones);
        this.app.use(enrutadorVariedad);
    }

    middleware()
    {
        //muestreo de las peticiones
        this.app.use(morgan('dev'));

        this.app.use(cors());

        //configuracion que le permitirá a nuestro servidor recibir y enviar datos en formato JSON
        this.app.use(express.json());
    }

    //Corre el servidor por un puerto elegido
    listen()
    {
        this.app.listen(this.app.get('port'));
        console.log('Servidor corriendo en el puerto 3000');
    }
}