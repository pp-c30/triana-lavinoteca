import { Router } from "express";
import { mensaje_bienvenida } from "../controllers/index.controllers";


let enrutadorIndex = Router();

enrutadorIndex.route('/').get();
export default enrutadorIndex;
