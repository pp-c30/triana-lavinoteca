import { Component, OnInit } from '@angular/core';
import { VariedadesService } from "../../services/variedades.service";

@Component({
  selector: 'app-variedades',
  templateUrl: './variedades.component.html',
  styleUrls: ['./variedades.component.css']
})
export class VariedadesComponent implements OnInit {
  listVariedad = [];
  constructor(private variedadServ:VariedadesService) { }

  ngOnInit(): void {
    this.obtenerVariedad();
  }
  obtenerVariedad(){
    this.variedadServ.getVariedad().subscribe(
      resultado => this.listVariedad = resultado,
      error => console.log(error)

    )
  }
}
