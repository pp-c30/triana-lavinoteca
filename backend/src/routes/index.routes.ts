import { Router } from "express";
import {  } from "../controllers/index.controllers";


let enrutadorIndex = Router();

enrutadorIndex.route('/').get();
export default enrutadorIndex;
