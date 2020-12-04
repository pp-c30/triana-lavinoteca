import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVariedad } from '../models/Variedad';

@Injectable({
  providedIn: 'root'
})
export class VariedadesService {

  constructor(private http: HttpClient) {}

  getVariedad()
  {
    return this.http.get<IVariedad[]>('http://localhost:3000/triana_variedad');
  }

  saveVariedad(unaVariedad: IVariedad){
    return this.http.post('http://localhost:3000/triana_variedad', unaVariedad);
  }
  updateVariedad(unVariedad: IVariedad)
  {
    let id: number;
    id = unVariedad.id_varie;
    return this.http.put('http://localhost:3000/triana_variedad/' + id, unVariedad);
  }
  deleteVariedad(id: number){

    return this.http.delete('http://localhost:3000/triana_variedad/' + id);

  }
}
