import { Component, OnInit } from '@angular/core';

import { OpinionesService } from '../../services/opiniones.service';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit {

  listOpinion = [];

  formOpinion: FormGroup;

  // Este es un atributo del tipo any (acepta strings, numbers, etc).
  buscarOpinion: any;

  // tslint:disable-next-line: no-inferrable-types
  p: number = 1;

  constructor(private opinionesserv: OpinionesService, private fb: FormBuilder)
   {
    this.formOpinion = this.fb.group({
      id_opinion: [null],
      id_producto: [],
      descripcion: ['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit(): void {
    this.obtenerOpinion();
  }

  obtenerOpinion(){
    this.opinionesserv.getOpinion().subscribe(

      resultado => this.listOpinion = resultado,
      error => console.log(error)
    );
  }

  guardarOpinion()
  {
    // console.log(this.formOpiniones.value);
    this.opinionesserv.saveOpinion(this.formOpinion.value).subscribe(
      resultado => {
        console.log(resultado);
        // se refresca la grilla
        this.obtenerOpinion();
        this.formOpinion.reset();
      },
      error => console.log(error)
    );

  }

  eliminarOpinion(id: number)
  {
    if (confirm('Esta seguro que desa ejecutar esta accion?')){
      this.opinionesserv.deleteOpinion(id).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerOpinion();
        },
        error => console.log(error)
      );
    }
  }
}

