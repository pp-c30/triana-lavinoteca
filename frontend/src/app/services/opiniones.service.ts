import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { IOpinion } from '../models/Opinion';


@Injectable({
  providedIn: 'root'
})
export class OpinionesService {

  constructor(private http: HttpClient) {}

  getOpinion()
    {
      return this.http.get<IOpinion[]>('http://localhost:3000/triana_opinion');
    }

    saveOpinion(UnaOpinion: IOpinion)
    {
      return this.http.post('http://localhost:3000/triana_opinion', UnaOpinion);
    }

    deleteOpinion(id: number){
      return this.http.delete('http://localhost:3000/triana_opinion/' + id);

    }
}
