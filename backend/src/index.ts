import { Server } from "./server";

function principal()
{
    //Se crea la instancia de la clase
    const servidor=new Server();
    servidor.listen();
}

//Ejecuto la funcion
principal();