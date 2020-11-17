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
}
