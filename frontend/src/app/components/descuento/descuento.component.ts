import { Component, OnInit } from '@angular/core';
import { DescuentoService } from '../../services/descuento.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IDescuento } from 'src/app/models/Descuento';

@Component({
  selector: 'app-descuento',
  templateUrl: './descuento.component.html',
  styleUrls: ['./descuento.component.css']
})
export class DescuentoComponent implements OnInit {
  listDescuento: IDescuento[] = [];

  // Este es un atributo del tipo FormGroup
  formDescuento: FormGroup;

  // Este es un atributo del tipo any (acepta strings, numbers, etc).
  buscarDescuento: any;

  // tslint:disable-next-line: no-inferrable-types
  p: number = 1;

   /* descuentosServ: es una instancia que nos permitira acceder a los metodos que contiene la clase DescuentosService
   fb: este atributo es una instancia de la clase FormBuilder*/
  constructor(private descuentosServ: DescuentoService, private fb: FormBuilder)
  {
    // Construcción del formulario
    this.formDescuento = this.fb.group({
      id_des: [null],
      porcentaje: [, [Validators.required, Validators.minLength(1)]],
      estado: [, [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit(): void {
    this.obtenerDescuento();
  }

  // Es un metodo que se ejecuta al iniciar la pagina, y nos mostrara una lista
  obtenerDescuento(){
    this.descuentosServ.getDescuento().subscribe(
      resultado => this.listDescuento = resultado,
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
    );
  }

  guardarDescuento(){
    if (this.formDescuento.value.id_des)
    {// Se actualiza
      this.descuentosServ.updateDescuento(this.formDescuento.value).subscribe(
        respuesta =>
        { // La respuesta se mostrara en consola
          console.log(respuesta);
          // Se refrescan los datos
          this.obtenerDescuento();
          // Se resetea el formulario
          this.formDescuento.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
    else {
      // El metodo guardarDescuento le enviara los datos, que recoge del formulario, al saveDescuento
      this.descuentosServ.saveDescuento(this.formDescuento.value).subscribe(
        resultado => {
          console.log(resultado);
          // Se refresca la grilla
          this.obtenerDescuento();
          // Se resetea el formulario
          this.formDescuento.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
  }

  // El atributo descuento sera del tipo IDescuento, y respetara los datos que contenga esa interfaz
  editarDescuento(descuento: IDescuento)
  {
    // En formBodega, van a ser seteados sus valores
    this.formDescuento.setValue(descuento);
  }

  eliminarDescuento(id: number)
  {
    // Preguntamos si fue confirmado
    if (confirm('Está seguro de realizar esta acción?')){
      this.descuentosServ.deleteDescuento(id).subscribe(
        // Vamos a recibir una respuesta por parte del servicio
        respuesta => {
          console.log(respuesta);
          // Se refresca la grilla
          this.obtenerDescuento();
        },
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
      );
    }
  }

}
