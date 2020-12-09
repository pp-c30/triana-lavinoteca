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
  saveProducto(unProducto: IProducto, file: File)
  {
    /* A esta dirección le enviaremos, a traves del metodo POST, los datos de un descuento y retorna el mensaje:
    "el descuento fue guardada exitosamente"*/
    const fd = new FormData();

    fd.append('nombre', unProducto.nombre);
    fd.append('categoria', String(unProducto.categoria));
    fd.append('stock', String(unProducto.stock));
    fd.append('precio', String(unProducto.precio));
    fd.append('variedad', String(unProducto.variedad));
    fd.append('bodega', String(unProducto.bodega));
    fd.append('cantmil', String(unProducto.cantmil));
    fd.append('estado', String(unProducto.estado));
    fd.append('img', file);

    return this.http.post('http://localhost:3000/triana_producto', fd);
  }

  // A traves de este metodo recibiremos un descuento que es del tipo IDescuento
  updateProducto(unProducto: IProducto)
  {
    let id: number;
    id = unProducto.id_producto;
    // Retornara la respuesta que nos dara la api: 'Se actualizo exitosamente'
    return this.http.put('http://localhost:3000/triana_producto/' + id, unProducto);
  }

  deleteProducto(id: number)
  {// Retornara la respuesta que nos dara la api: 'El descuento se eliminó correctamente'
    return this.http.delete('http://localhost:3000/triana_producto/' + id);
  }

  // tslint:disable-next-line: variable-name
  getOneProducto(id_producto: number){
    return this.http.get<IProducto>('http://localhost:3000/triana_producto/' + id_producto);
  }
}
