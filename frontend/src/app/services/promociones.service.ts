import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IPromocion } from '../models/Promocion';
@Injectable({
  providedIn: 'root'
})
export class PromocionesService {
/*Creamos un atributo llamado http, el cual es privado y del tipo HttpCliente. Esto basicamente es una instancia
  que puede acceder  a todas las herramientas del HttpClient.*/
  constructor(private http: HttpClient) { }
  // A través del metodo GET vamos a visitar a la ruta indicada, la cual nos retornara una lista de promociones.
  getPromocion()
  {
    // Los datos que lleguen tendran que concordar con la interfaz IPromociones, que es de tipo array (ya que llamamos una lista).
    return this.http.get<IPromocion[]>('http://localhost:3000/triana_promocion');
  }
  // A través de este metodo, savePromociones, recibiremos una promociones
  savePromocion(UnaPromocion: IPromocion)
  {
    /* A esta dirección le enviaremos, a traves del metodo POST, los datos de una promociones y retorna el mensaje:
    "la promociones fue guardada exitosamente"*/
    return this.http.post('http://localhost:3000/triana_promocion', UnaPromocion);
  }

  // A traves de este metodo recibiremos una promociones que es del tipo IPromociones
  updatePromocion(UnaPromocion: IPromocion)
  {
    let id: number;
    id = UnaPromocion.id_promo;
    // Retornara la respuesta que nos dara la api: 'Se actualizo exitosamente'
    return this.http.put('http://localhost:3000/triana_promocion/' + id, UnaPromocion);
  }

  deletePromocion(id: number)
  {// Retornara la respuesta que nos dara la api: 'La promociones se eliminó correctamente'
    return this.http.delete('http://localhost:3000/triana_promocion/' + id);
  }
}
