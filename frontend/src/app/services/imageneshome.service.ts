import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IImageneshome } from '../models/Imageneshome';

@Injectable({
  providedIn: 'root'
})

export class ImageneshomeService {
  // Esta instancia, http, nos permite acceder a las funcionalidades del HttpClient
  constructor(private http: HttpClient) {}

  // Queremos obtener los datos de la tabla imageneshome
  getImagenesHome()
  {
    // Los datos que lleguen tendran que concordar con la interfaz IImageneshome, que es de tipo array (ya que llamamos una lista).
    return this.http.get<IImageneshome[]>('http://localhost:3000/triana_imageneshome');
  }

  // A través de este metodo, saveImagenesHome, recibiremos una imagen con sus datos
  saveImagenesHome(dataImagenesHome: IImageneshome, file: File)
  {
    const fd = new FormData();

    fd.append('nombre', dataImagenesHome.nombre);
    fd.append('estado', String(dataImagenesHome.estado));
    fd.append('img', file);
    /* A esta dirección le enviaremos, a traves del metodo POST, los datos de una imagen y retorna el mensaje:
    "La imagen y sus datos fueron guardados exitosamente"*/
    return this.http.post('http://localhost:3000/triana_imageneshome', fd);
  }

  updateImagenesHome(dataImagenesHome: IImageneshome, file: File)
  {
    const fd = new FormData();

    // tslint:disable-next-line: prefer-const
    let id = dataImagenesHome.id_imagen;

    fd.append('nombre', dataImagenesHome.nombre);
    fd.append('estado', String(dataImagenesHome.estado));
    fd.append('public_id', dataImagenesHome.public_id);
    fd.append('img', file);

    return this.http.put('http://localhost:3000/triana_imageneshome/' + id, fd);
  }

  deleteImagenesHome(fila: IImageneshome)
  {
    // tslint:disable-next-line: prefer-const
    let id = fila.id_imagen;
    // tslint:disable-next-line: prefer-const
    let public_id = fila.public_id;
    return this.http.delete('http://localhost:3000/triana_imageneshome/' + id + '/' + public_id);
  }
}
