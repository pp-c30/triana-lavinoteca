"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const opinion_controller_1 = require("../controllers/opinion.controller");
let opinionController = new opinion_controller_1.OpinionController();
const enrutadorOpinion = express_1.Router();
enrutadorOpinion.route('/triana_opinion/:id_producto').get(opinionController.listarTrianaOpinion); //obtener datos y mostrarlo
enrutadorOpinion.route('/triana_opinion').get(opinionController.listarTrianaOpinionGeneral); //obtener datos y mostrarlo
enrutadorOpinion.route('/triana_opinion').post(opinionController.guardarTrianaOpinion); //guardar datos en la base de datos
enrutadorOpinion.route('/triana_opinion/:codigo_triana_opinion').delete(opinionController.eliminarTrianaOpinion); //elimina datos de la base de datos
exports.default = enrutadorOpinion;
