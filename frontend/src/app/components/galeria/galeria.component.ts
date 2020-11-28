import { Component, OnInit } from '@angular/core';
import { ImageneshomeService } from '../../services/imageneshome.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  lista_datos = [];

  constructor(private serviceImagenesHome: ImageneshomeService) { }

  ngOnInit(): void {
    this.listarImagenesHome();
  }

  listarImagenesHome()
  {
    this.serviceImagenesHome.getImagenesHome().subscribe(
      resultado =>
      {
        this.lista_datos = resultado;
      },
      error => console.log(error)
    );
  }
}
