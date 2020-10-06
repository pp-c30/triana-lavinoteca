"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
function principal() {
    //Se crea la instancia de la clase
    const servidor = new server_1.Server();
    servidor.listen();
}
//Ejecuto la funcion
principal();
