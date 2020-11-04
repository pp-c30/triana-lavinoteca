import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IBodega } from '../models/Bodega';

@Injectable({
  providedIn: 'root'
})
export class BodegasService {
  /*Creamos un atributo llamado http, el cual es privado y del tipo HttpCliente. Esto basicamente es una instancia
  que puede acceder  a todas las herramientas del HttpClient.*/
  constructor(private http: HttpClient) { }

  // A través del metodo GET vamos a visitar a la ruta indicada, la cual nos retornara una lista de bodegas.
  getBodega()
  {
    // Los datos que lleguen tendran que concordar con la interfaz IBodega, que es de tipo array (ya que llamamos una lista).
    return this.http.get<IBodega[]>('http://localhost:3000/triana_bodega');
  }

  // A través de este metodo, saveBodega, recibiremos una bodega
  saveBodega(UnaBodega: IBodega)
  {
    /* A esta dirección le enviaremos, a traves del metodo POST, los datos de una bodega y retorna el mensaje:
    "la bodega fue guardada exitosamente"*/
    return this.http.post('http://localhost:3000/triana_bodega', UnaBodega);
  }
}
