import { Component, OnInit } from '@angular/core';
import { ImageneshomeService } from '../../services/imageneshome.service';
import { IImageneshome } from '../../../../../backend/src/models/imageneshome';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-imageneshome',
  templateUrl: './admin-imageneshome.component.html',
  styleUrls: ['./admin-imageneshome.component.css']
})
export class AdminImageneshomeComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  listado_datos_imageneshome = [];

  // Este es un atributo del tipo FormGroup
  formImagenesHome: FormGroup;

  // Generamos una instancia
  fb = new FormBuilder();

  // servimageneshome: es una instancia que nos permitira acceder a los metodos que contiene la clase ImageneshomeService
  constructor(private servImageneshome: ImageneshomeService) { }

  ngOnInit(): void {
    this.listarImagenesHome();
  }


  listarImagenesHome()
  {
    this.servImageneshome.getImagenesHome().subscribe(
      resultado => {
        this.listado_datos_imageneshome = resultado;
      },
      error => console.log(error)
    );
  }
}
