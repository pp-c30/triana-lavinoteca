import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IProducto } from '../models/Producto';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {}
      // A través del metodo GET vamos a visitar a la ruta indicada, la cual nos retornara una lista de descuentos.
  getProducto()
  {
    // Los datos que lleguen tendran que concordar con la interfaz IDescuento, que es de tipo array (ya que llamamos una lista).
    return this.http.get<IProducto[]>('http://localhost:3000/triana_producto');
  }

  // A través de este metodo, saveDescuento, recibiremos un descuento
  saveProducto(UnProducto: IProducto)
  {
    /* A esta dirección le enviaremos, a traves del metodo POST, los datos de un descuento y retorna el mensaje:
    "el descuento fue guardada exitosamente"*/
    return this.http.post('http://localhost:3000/triana_producto', UnProducto);
  }

  // A traves de este metodo recibiremos un descuento que es del tipo IDescuento
  updateProducto(UnProducto: IProducto)
  {
    let id: number;
    id = UnProducto.id_producto;
    // Retornara la respuesta que nos dara la api: 'Se actualizo exitosamente'
    return this.http.put('http://localhost:3000/triana_producto/' + id, UnProducto);
  }

  deleteProducto(id: number)
  {// Retornara la respuesta que nos dara la api: 'El descuento se eliminó correctamente'
    return this.http.delete('http://localhost:3000/triana_producto/' + id);
  }
}
