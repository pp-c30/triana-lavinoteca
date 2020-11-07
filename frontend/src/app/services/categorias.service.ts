import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICategoria} from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  /*Creamos un atributo llamado http, el cual es privado y del tipo HttpCliente. Esto basicamente es una instancia
  que puede acceder  a todas las herramientas del HttpClient.*/
  constructor(private http: HttpClient) { }
  // A través del metodo GET vamos a visitar a la ruta indicada, la cual nos retornara una lista de categorias.
  getCategoria()
  {
    // Los datos que lleguen tendran que concordar con la interfaz ICategoria, que es de tipo array (ya que llamamos una lista).
    return this.http.get<ICategoria[]>('http://localhost:3000/triana_categoria');
  }

  // A través de este metodo, saveCategoria, recibiremos una categoria
  saveCategoria(UnaCategoria: ICategoria)
  {
    /* A esta dirección le enviaremos, a traves del metodo POST, los datos de una categoria y retorna el mensaje:
    "la categoria fue guardada exitosamente"*/
    return this.http.post('http://localhost:3000/triana_categoria', UnaCategoria);
  }

  // A traves de este metodo recibiremos una categoria que es del tipo ICategoria
  updateCategoria(UnaCategoria: ICategoria)
  {
    let id: number;
    id = UnaCategoria.id_categoria;
    // Retornara la respuesta que nos dara la api: 'Se actualizo exitosamente'
    return this.http.put('http://localhost:3000/triana_categoria/' + id, UnaCategoria);
  }

  deleteCategoria(id: number)
  {// Retornara la respuesta que nos dara la api: 'La categoria se eliminó correctamente'
    return this.http.delete('http://localhost:3000/triana_categoria/' + id);
  }
}
