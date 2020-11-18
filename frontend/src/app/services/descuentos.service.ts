import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IDescuento } from '../models/Descuento';

@Injectable({
  providedIn: 'root'
})
export class DescuentosService {
  /*Creamos un atributo llamado http, el cual es privado y del tipo HttpCliente. Esto basicamente es una instancia
  que puede acceder a todas las herramientas del HttpClient.*/
  constructor(private http: HttpClient) { }

  // A través del metodo GET vamos a visitar a la ruta indicada, la cual nos retornara una lista de descuentos.
  getDescuento()
  {
    // Los datos que lleguen tendran que concordar con la interfaz IDescuento, que es de tipo array (ya que llamamos una lista).
    return this.http.get<IDescuento[]>('http://localhost:3000/triana_descuento');
  }

  // A través de este metodo, saveDescuento, recibiremos un descuento
  saveDescuento(UnDescuento: IDescuento)
  {
    /* A esta dirección le enviaremos, a traves del metodo POST, los datos de un descuento y retorna el mensaje:
    "el descuento fue guardada exitosamente"*/
    return this.http.post('http://localhost:3000/triana_descuento', UnDescuento);
  }

  // A traves de este metodo recibiremos un descuento que es del tipo IDescuento
  updateDescuento(UnDescuento: IDescuento)
  {
    let id: number;
    id = UnDescuento.id_des;
    // Retornara la respuesta que nos dara la api: 'Se actualizo exitosamente'
    return this.http.put('http://localhost:3000/triana_descuento/' + id, UnDescuento);
  }

  deleteDescuento(id: number)
  {// Retornara la respuesta que nos dara la api: 'El descuento se eliminó correctamente'
    return this.http.delete('http://localhost:3000/triana_descuento/' + id);
  }
}

