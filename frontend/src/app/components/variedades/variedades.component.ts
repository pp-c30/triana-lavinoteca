import { Component, OnInit } from '@angular/core';
import { VariedadesService } from '../../services/variedades.service';
import { FormBuilder, FormGroup, Form } from '@angular/forms';
import { IVariedad } from 'src/app/models/Variedad';

@Component({
  selector: 'app-variedades',
  templateUrl: './variedades.component.html',
  styleUrls: ['./variedades.component.css']
})

export class VariedadesComponent implements OnInit {

  listVariedad = [];
  formVariedad: FormGroup;

  constructor(private variedadServ: VariedadesService, private fb: FormBuilder) {
    this.formVariedad = this.fb.group({
      id_varie: [null],
      descripcion: ['']

    });
   }

  ngOnInit(): void {
    this.obtenerVariedad();
  }
  obtenerVariedad(){
    this.variedadServ.getVariedad().subscribe(
      resultado => this.listVariedad = resultado,
      error => console.log(error)

    );
  }

  guardarVariedad(){
    if(this.formVariedad.value.id_varie)
    {
      // se actuaiza
      this.variedadServ.updateVariedad(this.formVariedad.value).subscribe(
        resultado => {
          console.log(resultado);
          this.obtenerVariedad();
          this.formVariedad.reset();
        },
        error=> console.log(error)
      )
    }

    else
    {
      this.variedadServ.saveVariedad(this.formVariedad.value).subscribe(
        resultado => {
          console.log(resultado);
          // se refresca la grilla
          this.obtenerVariedad();
          this.formVariedad.reset();
        },
        error => console.log(error)
      );
    }
 
    
  }
  editarVariedad(variedad: IVariedad){
    this.formVariedad.setValue(variedad);

  }
}
