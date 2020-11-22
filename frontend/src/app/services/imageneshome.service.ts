import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IImageneshome } from '../models/Imageneshome';

@Injectable({
  providedIn: 'root'
})
export class ImageneshomeService {

  // Esta instancia, http, nos permite acceder a las funcionalidades del HttpClient
  constructor(private http: HttpClient) { }

  // Queremos obtener los datos de la tabla imageneshome
  getImagenesHome()
  {
    // Los datos que lleguen tendran que concordar con la interfaz IImageneshome, que es de tipo array (ya que llamamos una lista).
    return this.http.get<IImageneshome[]>('http://localhost:3000/triana_imageneshome');
  }

  // A través de este metodo, saveImagenesHome, recibiremos una imagen con sus datos
  saveImagenesHome(dataImagenesHome: IImageneshome)
  {
    /* A esta dirección le enviaremos, a traves del metodo POST, los datos de una imagen y retorna el mensaje:
    "La imagen y sus datos fueron guardados exitosamente"*/
    return this.http.post('http://localhost:3000/triana_imageneshome', dataImagenesHome);
  }
}
