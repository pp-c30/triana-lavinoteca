import { Component, OnInit } from '@angular/core';

import { OpinionesService } from "../../services/opiniones.service";

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit {
  listOpiniones = [];

  constructor(private opinionesserv:OpinionesService) { }

  ngOnInit(): void {
    this.obtenerOpiniones();
  }

  obtenerOpiniones(){
    this.opinionesserv.getOpiniones().subscribe(

      resultado => this.listOpiniones = resultado,
      error => console.log(error)
    )
  }

}
