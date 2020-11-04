import { Component, OnInit } from '@angular/core';
import { BodegasService } from '../../services/bodegas.service';
import {FormBuilder, FormGroup} from '@angular/forms';
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

   /* bodegasServ: es una instancia que nos permitira acceder a los metodos que contiene la clase BodegasService
   fb: este atributo es una instancia de la clase FormBuilder*/
  constructor(private bodegaServ: BodegasService, private fb: FormBuilder)
  {
    // Construcción del formulario
    this.formBodega = this.fb.group({
      descripcion: ['']
    });
   }

  ngOnInit(): void {
    this.obtenerBodega();
  }

  // Es un metodo que se ejecuta al iniciar la pagina, y nos mostrara una lista
  obtenerBodega(){
    this.bodegaServ.getBodega().subscribe(
      resultado => this.listBodega = resultado,
      // Si hay un error que lo imprima en consola
      error => console.log(error)
    );
  }

  // Este metodo le enviara los datos, que recoge del formulario, al saveBodega
  guardarBodega(){
    this.bodegaServ.saveBodega(this.formBodega.value).subscribe(
      resultado => {
        console.log(resultado);
        // Se refresca la grilla
        this.obtenerBodega();
        // Se resetea el formulario
        this.formBodega.reset();
      },
      // Si hay un error que lo imprima en consola
      error => console.log(error)
    );
  }
}
