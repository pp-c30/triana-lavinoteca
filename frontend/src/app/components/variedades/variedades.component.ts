import { Component, OnInit } from '@angular/core';
import { VariedadesService } from '../../services/variedades.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IVariedad } from 'src/app/models/Variedad';
import { CategoriasService } from '../../services/categorias.service';
import { ICategoria } from '../../models/Categoria';

@Component({
  selector: 'app-variedades',
  templateUrl: './variedades.component.html',
  styleUrls: ['./variedades.component.css']
})

export class VariedadesComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  lista_categoria: ICategoria[] = [];

  listVariedad = [];

  formVariedad: FormGroup;

  // Este es un atributo del tipo any (acepta strings, numbers, etc).
  buscarVariedad: any;

  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;

  constructor(private variedadesServ: VariedadesService,  private serviceCategoria: CategoriasService, private fb: FormBuilder) {
    this.formVariedad = this.fb.group({
      id_varie: [null],
      id_categoria: [0, [Validators.required, Validators.minLength(1)]],
      descripcion: ['', [Validators.required, Validators.minLength(2)]]
    });
   }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.obtenerVariedad();
  }

  obtenerCategorias()
  {
    this.serviceCategoria.getCategoria().subscribe(
      resultado => {
        this.lista_categoria = resultado;
      },
      error => console.log(error)
    );
  }


  obtenerVariedad(){
    this.variedadesServ.getVariedad().subscribe(
      resultado => {this.listVariedad = resultado;
      },
      error => console.log(error)

    );
  }

  guardarVariedad(){
    if (this.formVariedad.value.id_varie)
    {
      // se actualiza
      this.variedadesServ.updateVariedad(this.formVariedad.value).subscribe(
        resultado => {
          // console.log(resultado);
          // Se refrescan los datos
          this.obtenerVariedad();
          // Se resetea el formulario
          this.formVariedad.reset();
          this.formVariedad.get('id_categoria').setValue(0);
        },
        error => console.log(error)
      );
    }

    else
    {
      this.variedadesServ.saveVariedad(this.formVariedad.value).subscribe(
        resultado => {
          // console.log(resultado);
          // Se refrescan los datos
          this.obtenerVariedad();
          // se refresca la grilla
          this.formVariedad.reset();
          this.formVariedad.get('id_categoria').setValue(0);
        },
        error => console.log(error)
      );
    }

  }
  editarVariedad(variedad: IVariedad){
    this.formVariedad.setValue({
      id_varie: variedad.id_varie,
      id_categoria: variedad.id_c,
      descripcion: variedad.descripcion
    });

  }
  eliminarVariedad(id: number){
    if (confirm('esta seguro que desa ejecutar esta accion?')){
      this.variedadesServ.deleteVariedad(id).subscribe(
        resultado => {
          console.log(resultado);
          this.obtenerVariedad();
        },
        error => console.log(error)
      );
    }
  }

}
