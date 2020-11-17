import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IDescuento } from '../models/Descuento';
@Injectable({
  providedIn: 'root'
})
export class DescuentoService {
/*Creamos un atributo llamado http, el cual es privado y del tipo HttpCliente. Esto basicamente es una instancia
  que puede acceder  a todas las herramientas del HttpClient.*/
  constructor(private http: HttpClient) {
    // A través del metodo GET vamos a visitar a la ruta indicada, la cual nos retornara una lista de descuento.
  getDescuento();
  {
    // Los datos que lleguen tendran que concordar con la interfaz IDescuento, que es de tipo array (ya que llamamos una lista).
    return this.http.get<Iv[]>('http://localhost:3000/triana_descuento');
  }
  // A través de este metodo, saveDescuento, recibiremos una descuento
  saveDescuento(UnaDescuento: IDescuento)
  {
    /* A esta dirección le enviaremos, a traves del metodo POST, los datos de una Descuento y retorna el mensaje:
    "la Descuento fue guardada exitosamente"*/
    return this.http.post('http://localhost:3000/triana_descuento', UnaDescuento);
  }

  // A traves de este metodo recibiremos una Descuentos que es del tipo IDescuento
  updateDescuento(UnaDescuento: IDescuento)
  {
    let id: number;
    id = UnaDescuento.id_des;
    // Retornara la respuesta que nos dara la api: 'Se actualizo exitosamente'
    return this.http.put('http://localhost:3000/triana_descuento/' + id, UnaDescuento);
  }

  deleteDescuento(id: number)
  {// Retornara la respuesta que nos dara la api: 'La Descuento se eliminó correctamente'
    return this.http.delete('http://localhost:3000/triana_descuento/' + id);
  }
   }
}