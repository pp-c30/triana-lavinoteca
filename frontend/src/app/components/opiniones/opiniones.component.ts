import { Component, OnInit } from '@angular/core';
import { OpinionesService } from '../../services/opiniones.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { IProducto } from '../../models/Producto';
import { IOpinion } from '../../models/Opinion';


@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit {
  formOpiniones: FormGroup;

  // tslint:disable-next-line: variable-name
  lista_producto: IProducto[] = [];

  // tslint:disable-next-line: variable-name
  lista_opinion: IOpinion[] = [];

  // Este es un atributo del tipo any (acepta strings, numbers, etc).
  buscarOpinion: any;

  // tslint:disable-next-line: no-inferrable-types
  p: number = 1;

  constructor(private fb: FormBuilder, private serviceProducto: ProductosService, private serviceOpinion: OpinionesService)
   {
     this.formOpiniones = this.fb.group({
       id_producto : [0, Validators.required],
       descripcion : ['', Validators.required]
     });
   }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerOpinion();
  }

  guardarOpinion()
  {
    this.serviceOpinion.saveOpinion(this.formOpiniones.value).subscribe(
      respuesta =>
      {
        this.formOpiniones.reset();
        this.obtenerOpinion();
        // console.log(respuesta);
      },
      error => console.log(error)
    );
  }

  obtenerOpinion()
  {
    this.serviceOpinion.getOpinion().subscribe(
      resultado => {
        this.lista_opinion = resultado;
      },
      error => console.log(error)
    );
  }

  eliminarOpinion(id: number)
  {
    // Preguntamos si fue confirmado
    if (confirm('Está seguro de realizar esta acción?')){
      this.serviceOpinion.deleteOpinion(id).subscribe(
        // Vamos a recibir una respuesta por parte del servicio
        respuesta => {
          console.log(respuesta);
          // Se refresca la grilla
          this.obtenerOpinion();
        },
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
      );
    }
  }

  obtenerProductos()
  {
    this.serviceProducto.getProducto().subscribe(
      resultado => {
        this.lista_producto = resultado;
      },
      error => console.log(error)
    );
  }
}

