import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ICategoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  listCategoria: ICategoria[] = [];

  // Este es un atributo del tipo FormGroup
  formCategoria: FormGroup;

  // Este es un atributo del tipo any (acepta strings, numbers, etc).
  buscarCategoria: any;

  // tslint:disable-next-line: no-inferrable-types
  p: number = 1;

  /* categoriasServ: es una instancia que nos permitira acceder a los metodos que contiene la clase CategoriasService
   fb: este atributo es una instancia de la clase FormBuilder*/
  constructor(private categoriasServ: CategoriasService, private fb: FormBuilder)
  {
    // Construcción del formulario
    this.formCategoria = this.fb.group({
      id_categoria: [null],
      descripcion: ['', [Validators.required, Validators.minLength(3)]]
    });
   }

  ngOnInit(): void {
    this.obtenerCategoria();
  }

  // Es un metodo que se ejecuta al iniciar la pagina, y nos mostrara una lista
  obtenerCategoria()
  {
    this.categoriasServ.getCategoria().subscribe(
      resultado => this.listCategoria = resultado,
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
    );
  }

  guardarCategoria(){
    if (this.formCategoria.value.id_categoria)
    {// Se actualiza
      this.categoriasServ.updateCategoria(this.formCategoria.value).subscribe(
        respuesta =>
        { // La respuesta se mostrara en consola
          console.log(respuesta);
          // Se refrescan los datos
          this.obtenerCategoria();
          // Se resetea el formulario
          this.formCategoria.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
    else {
      // El metodo guardarCategoria le enviara los datos, que recoge del formulario, al saveCategoria
      this.categoriasServ.saveCategoria(this.formCategoria.value).subscribe(
        resultado => {
          console.log(resultado);
          // Se refresca la grilla
          this.obtenerCategoria();
          // Se resetea el formulario
          this.formCategoria.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
  }

  // El atributo categoria sera del tipo ICategoria, y respetara los datos que contenga esa interfaz
  editarCategoria(categoria: ICategoria)
  {
    // En formCategoria, van a ser seteados sus valores
    this.formCategoria.setValue(categoria);
  }

  eliminarCategoria(id: number)
  {
    // Preguntamos si fue confirmado
    if (confirm('Está seguro de realizar esta acción?')){
      this.categoriasServ.deleteCategoria(id).subscribe(
        // Vamos a recibir una respuesta por parte del servicio
        respuesta => {
          console.log(respuesta);
          // Se refresca la grilla
          this.obtenerCategoria();
        },
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
      );
    }
  }

}
