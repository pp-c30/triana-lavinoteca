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
  // tslint:disable-next-line:variable-name
  id_imagen: number;

  unaImagenHome: IImageneshome;
  lista_imagenes: IImageneshome[] = [];

  constructor(private activatedRouter: ActivatedRoute, private serviceImagenes: ImageneshomeService) { }
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      params => {
       this.id_imagen = params.id_imagen;
      },
      error => console.error(error)
    );

    this.obtenerUnaImagenHome(this.id_imagen);
    this.obtenerListaImagenes();

  }
  // tslint:disable-next-line:variable-name
  obtenerUnaImagenHome(id_imagen: number){
    this.serviceImagenes.getOneImagenHome(id_imagen).subscribe(
      resultado => {
        this.unaImagenHome = resultado;
      },
      error => console.log(error)
    );

  }

  obtenerListaImagenes(){

    this.serviceImagenes.getImagenesHome().subscribe(
      resultado => {
        this.lista_imagenes = resultado;

      },
      error => console.log(error)

    );

  }

}
