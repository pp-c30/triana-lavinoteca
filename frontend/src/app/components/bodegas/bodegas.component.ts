import { Component, OnInit } from '@angular/core';
import { BodegasService } from '../../services/bodegas.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IBodega } from 'src/app/models/Bodega';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})
export class BodegasComponent implements OnInit {
  listBodega: IBodega[] = [];

  // Este es un atributo del tipo FormGroup
  formBodega: FormGroup;

  // Este es un atributo del tipo any (acepta strings, numbers, etc).
  buscarBodega: any;

  // tslint:disable-next-line: no-inferrable-types
  p: number = 1;

   /* bodegasServ: es una instancia que nos permitira acceder a los metodos que contiene la clase BodegasService
   fb: este atributo es una instancia de la clase FormBuilder*/
  constructor(private bodegasServ: BodegasService, private fb: FormBuilder)
  {
    // Construcción del formulario
    this.formBodega = this.fb.group({
      id_bodega: [null],
      descripcion: ['', [Validators.required, Validators.minLength(4)]]
    });
   }

  ngOnInit(): void {
    this.obtenerBodega();
  }

  // Es un metodo que se ejecuta al iniciar la pagina, y nos mostrara una lista
  obtenerBodega(){
    this.bodegasServ.getBodega().subscribe(
      resultado => this.listBodega = resultado,
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
    );
  }

  guardarBodega(){
    if (this.formBodega.value.id_bodega)
    {// Se actualiza
      this.bodegasServ.updateBodega(this.formBodega.value).subscribe(
        respuesta =>
        { // La respuesta se mostrara en consola
          console.log(respuesta);
          // Se refrescan los datos
          this.obtenerBodega();
          // Se resetea el formulario
          this.formBodega.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
    else {
      // El metodo guardarBodega le enviara los datos, que recoge del formulario, al saveBodega
      this.bodegasServ.saveBodega(this.formBodega.value).subscribe(
        resultado => {
          console.log(resultado);
          // Se refresca la grilla
          this.obtenerBodega();
          // Se resetea el formulario
          this.formBodega.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
  }

  // El atributo bodega sera del tipo IBodega, y respetara los datos que contenga esa interfaz
  editarBodega(bodega: IBodega)
  {
    // En formBodega, van a ser seteados sus valores
    this.formBodega.setValue(bodega);
  }

  eliminarBodega(id: number)
  {
    // Preguntamos si fue confirmado
    if (confirm('Está seguro de realizar esta acción?')){
      this.bodegasServ.deleteBodega(id).subscribe(
        // Vamos a recibir una respuesta por parte del servicio
        respuesta => {
          console.log(respuesta);
          // Se refresca la grilla
          this.obtenerBodega();
        },
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
      );
    }
  }
}
