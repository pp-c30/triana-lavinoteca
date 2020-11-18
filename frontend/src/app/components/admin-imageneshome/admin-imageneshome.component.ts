import { Component, OnInit } from '@angular/core';
import { ImageneshomeService } from '../../services/imageneshome.service';

@Component({
  selector: 'app-admin-imageneshome',
  templateUrl: './admin-imageneshome.component.html',
  styleUrls: ['./admin-imageneshome.component.css']
})
export class AdminImageneshomeComponent implements OnInit {
  // servimageneshome: es una instancia que nos permitira acceder a los metodos que contiene la clase ImageneshomeService
  constructor(private servimageneshome: ImageneshomeService) { }

  ngOnInit(): void {
  }

  listarImagenesHome()
  {}
}
