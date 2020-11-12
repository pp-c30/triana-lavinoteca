import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { Iopinion } from "../models/Opinion";


@Injectable({
  providedIn: 'root'
})
export class OpinionesService {

  constructor(private http:HttpClient) {
  
   }
   getOpiniones()
    {
      return this.http.get<Iopinion[]>('http://localhost:3000/triana_opinion')
    }
    saveOpiniones(UnOpiniones:Iopinion)
    {
      return this.http.post('http://localhost:3000/triana_opinion/',UnOpiniones);
    }

    deleteOpiniones(codigo_triana_opinion:number){
      return this.http.delete('http://localhost:3000/codigo_triana_opinion'+codigo_triana_opinion);

    }
}
