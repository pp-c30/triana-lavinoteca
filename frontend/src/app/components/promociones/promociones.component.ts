import { Component, OnInit } from '@angular/core';
import { PromocionesService } from '../../services/promociones.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IPromociones } from 'src/app/models/Promociones';
@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  listPromociones: IPromociones[] = [];

  // Este es un atributo del tipo FormGroup
  formPromociones: FormGroup;

  // Este es un atributo del tipo any (acepta strings, numbers, etc).
  buscarPromociones: any;

  // tslint:disable-next-line: no-inferrable-types
  p: number = 1;

   /* PromocionesServ: es una instancia que nos permitira acceder a los metodos que contiene la clase PromocionesService
   fb: este atributo es una instancia de la clase FormBuilder*/
  constructor(private promocionesServ: PromocionesService, private fb: FormBuilder)
  {
    // Construcción del formulario
    this.formPromociones = this.fb.group({
      id_promo: [null],
      producto: ['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit(): void {
    this.obtenerPromociones();
  }
  // Es un metodo que se ejecuta al iniciar la pagina, y nos mostrara una lista
  obtenerPromociones(){
    this.promocionesServ.getPromociones().subscribe(
      resultado => this.listPromociones = resultado,
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
    );
  }
  guardarPromociones(){
    if (this.formPromociones.value.id_promo)
    {// Se actualiza
      this.promocionesServ.updatePromociones(this.formPromociones.value).subscribe(
        respuesta =>
        { // La respuesta se mostrara en consola
          console.log(respuesta);
          // Se refrescan los datos
          this.obtenerPromociones();
          // Se resetea el formulario
          this.formPromociones.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
    else {
      // El metodo guardarPromociones le enviara los datos, que recoge del formulario, al saveBodega
      this.promocionesServ.savePromociones(this.formPromociones.value).subscribe(
        resultado => {
          console.log(resultado);
          // Se refresca la grilla
          this.obtenerPromociones();
          // Se resetea el formulario
          this.formPromociones.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
  }
  // El atributo promociones sera del tipo Ipromociones, y respetara los datos que contenga esa interfaz
  editarPromociones(promociones: IPromociones)
  {
    // En formPromociones, van a ser seteados sus valores
    this.formPromociones.setValue(promociones);
  }

  eliminarPromociones(id: number)
  {
    // Preguntamos si fue confirmado
    if (confirm('Está seguro de realizar esta acción?')){
      this.promocionesServ.deletePromociones(id).subscribe(
        // Vamos a recibir una respuesta por parte del servicio
        respuesta => {
          console.log(respuesta);
          // Se refresca la grilla
          this.obtenerPromociones();
        },
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
      );
    }
  }
}
