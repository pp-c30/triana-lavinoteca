import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVariedad } from '../models/Variedad';

@Injectable({
  providedIn: 'root'
})
export class VariedadesService {

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: variable-name
  getVariedad()
  {
    return this.http.get<IVariedad[]>('http://localhost:3000/triana_variedad');
  }

  saveVariedad(unaVariedad: IVariedad){
    return this.http.post('http://localhost:3000/triana_variedad', unaVariedad);
  }
  updateVariedad(unVariedad: IVariedad)
  {
    // tslint:disable-next-line: prefer-const
    let id: number = unVariedad.id_varie;
    // tslint:disable-next-line: prefer-const
    return this.http.put('http://localhost:3000/triana_variedad/' + id, unVariedad);
  }
  deleteVariedad(id: number){

    return this.http.delete('http://localhost:3000/triana_variedad/' + id);

  }
  // tslint:disable-next-line: variable-name
  getVariedadPorCategoria(id_cat: number)
  {
    return this.http.get<IVariedad[]>('http://localhost:3000/triana_variedad/' + id_cat);
  }
}
