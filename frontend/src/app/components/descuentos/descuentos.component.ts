import { Component, OnInit } from '@angular/core';
import { DescuentosService } from '../../services/descuentos.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IDescuentos } from 'src/app/models/Descuento';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})
export class DescuentosComponent implements OnInit {
  listDescuentos: IDescuentos[] = [];

  // Este es un atributo del tipo FormGroup
  formDescuentos: FormGroup;

  // Este es un atributo del tipo any (acepta strings, numbers, etc).
  buscarDescuentos: any;

  // tslint:disable-next-line: no-inferrable-types
  p: number = 1;

   /* descuentosServ: es una instancia que nos permitira acceder a los metodos que contiene la clase DescuentosService
   fb: este atributo es una instancia de la clase FormBuilder*/
  constructor(private descuentosServ: DescuentosService, private fb: FormBuilder)
  {
    // Construcción del formulario
    this.formDescuentos = this.fb.group({
      id_des: [null],
      porcentaje: [, [Validators.required, Validators.minLength(1)]],
      estado: [, [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit(): void {
    this.obtenerDescuentos();
  }

  // Es un metodo que se ejecuta al iniciar la pagina, y nos mostrara una lista
  obtenerDescuentos(){
    this.descuentosServ.getDescuento().subscribe(
      resultado => this.listDescuentos = resultado,
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
    );
  }

  guardarDescuentos(){
    if (this.formDescuentos.value.id_des)
    {// Se actualiza
      this.descuentosServ.updateDescuentos(this.formDescuentos.value).subscribe(
        respuesta =>
        { // La respuesta se mostrara en consola
          console.log(respuesta);
          // Se refrescan los datos
          this.obtenerDescuentos();
          // Se resetea el formulario
          this.formDescuentos.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
    else {
      // El metodo guardarDescuento le enviara los datos, que recoge del formulario, al saveDescuento
      this.descuentosServ.saveDescuento(this.formDescuentos.value).subscribe(
        resultado => {
          console.log(resultado);
          // Se refresca la grilla
          this.obtenerDescuentos();
          // Se resetea el formulario
          this.formDescuentos.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
  }

  // El atributo descuento sera del tipo IDescuento, y respetara los datos que contenga esa interfaz
  editarDescuentos(descuentos: IDescuentos)
  {
    // En formBodega, van a ser seteados sus valores
    this.formDescuentos.setValue(descuentos);
  }

  eliminarDescuentos(id: number)
  {
    // Preguntamos si fue confirmado
    if (confirm('Está seguro de realizar esta acción?')){
      this.descuentosServ.deleteDescuentos(id).subscribe(
        // Vamos a recibir una respuesta por parte del servicio
        respuesta => {
          console.log(respuesta);
          // Se refresca la grilla
          this.obtenerDescuentos();
        },
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
      );
    }
  }

}
