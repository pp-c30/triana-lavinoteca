import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) { }

  register(datosRegistro: IUsuario){
    return this.http.post('http://localhost:3000/registro', datosRegistro);
  }

  login(datosIngreso: IUsuario){
    return this.http.post('http://localhost:3000/ingreso', datosIngreso);
  }
}
