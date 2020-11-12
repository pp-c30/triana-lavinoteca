import { Component, OnInit } from '@angular/core';

import { OpinionesService } from "../../services/opiniones.service";

import { FormBuilder, FormGroup, Form } from "@angular/forms";

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit {
  
  listOpiniones = [];

  formOpiniones: FormGroup;

  constructor(private opinionesserv:OpinionesService,private fb: FormBuilder)
   {
    this.formOpiniones = this.fb.group({

  
      descripcion:['']

    });
   }

  ngOnInit(): void {
    this.obtenerOpiniones();
  }

  obtenerOpiniones(){
    this.opinionesserv.getOpiniones().subscribe(

      resultado => this.listOpiniones = resultado,
      error => console.log(error)
    )
  }

  guardarOpiniones()
  {
    //console.log(this.formOpiniones.value);  
    this.opinionesserv.saveOpiniones(this.formOpiniones.value).subscribe(
      resultado => {
        console.log(resultado);
        //se refresca la grilla
        this.obtenerOpiniones();
        this.formOpiniones.reset();
      },
      error => console.log(error)
    );

  }

  eliminarOpiniones(codigo_triana_opinion:number)
  {
    if(confirm('Esta seguro que desa ejecutar esta accion?')){
      this.opinionesserv.deleteOpiniones(codigo_triana_opinion).subscribe(
        respuesta =>{
          console.log(respuesta);
          this.obtenerOpiniones();
        },
        error => console.log(error)
      );
    }
    
  }



}
