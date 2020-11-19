import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IVariedad } from "../models/Variedad";

@Injectable({
  providedIn: 'root'
})
export class VariedadesService {

  constructor(private http:HttpClient) { 

  }
  getVariedad()
  {
    return this.http.get<IVariedad[]>('http://localhost:3000/triana_variedad');
  }

  saveVariedad(unVariedad:IVariedad){
    return this.http.post('http://localhost:3000/triana_variedad',unVariedad);
  }
  updateVariedad(unVariedad: IVariedad)
  {
    let id:Number = unVariedad.id_varie;
    return this.http.put('http://localhost:3000/triana_variedad/:codigo_triana_variedad/'+id,unVariedad);
  }
} 
