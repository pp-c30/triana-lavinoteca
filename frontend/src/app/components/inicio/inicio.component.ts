import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageneshomeService } from '../../services/imageneshome.service';
import { IImageneshome } from '../../models/Imageneshome';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  id_imagen: number;
  unaImagenHome: IImageneshome;

  constructor(private activatedRouter: ActivatedRoute, private serviceImagenes: ImageneshomeService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      params => {
       this.id_imagen = params.id_imagen;
      },
      error => console.error(error)
    );

    this.obtenerUnaImagenHome(this.id_imagen);

  }
  obtenerUnaImagenHome(id_imagen:number){
    this.serviceImagenes.getOneImagenHome(id_imagen).subscribe(
      resultado => {
        this.unaImagenHome = resultado;
      },
      error => console.log(error)
    );

  }

}
