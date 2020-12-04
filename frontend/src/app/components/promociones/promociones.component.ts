import { Component, OnInit } from '@angular/core';
import { PromocionesService } from '../../services/promociones.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IPromocion } from 'src/app/models/Promocion';
import { ProductosService } from '../../services/productos.service';
import { DescuentosService } from '../../services/descuentos.service';
import { IProducto} from '../../models/Producto';
import { IDescuentos } from '../../models/Descuento';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  lista_producto: IProducto[] = [];

  // tslint:disable-next-line: variable-name
  lista_descuento: IDescuentos[] = [];

  listPromocion: IPromocion[] = [];

  // Este es un atributo del tipo FormGroup
  formPromocion: FormGroup;

  // Este es un atributo del tipo any (acepta strings, numbers, etc).
  buscarPromocion: any;

  // tslint:disable-next-line: no-inferrable-types
  p: number = 1;

   /* PromocionesServ: es una instancia que nos permitira acceder a los metodos que contiene la clase PromocionesService
   fb: este atributo es una instancia de la clase FormBuilder*/
  // tslint:disable-next-line: max-line-length
  constructor(private promocionesServ: PromocionesService, private fb: FormBuilder, private productosServ: ProductosService, private descuentosServ: DescuentosService)
  {
    // Construcción del formulario
    this.formPromocion = this.fb.group({
      id_promo: [null],
      producto: [null, Validators.required],
      descuento: [null, Validators.required]
    });
   }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerDescuentos();
    this.obtenerPromocion();
  }

  obtenerProductos()
  {
    this.productosServ.getProducto().subscribe(
      resultado => {
        this.lista_producto = resultado;
      },
      error => console.log(error)
    );
  }

  obtenerDescuentos(){
    this.descuentosServ.getDescuento().subscribe(
      respuesta => {
        this.lista_descuento = respuesta;
      },
      error => console.log(error)
    );
  }

  // Es un metodo que se ejecuta al iniciar la pagina, y nos mostrara una lista
  obtenerPromocion(){
    this.promocionesServ.getPromocion().subscribe(
      resultado => this.listPromocion = resultado,
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
    );
  }
  guardarPromocion(){
    if (this.formPromocion.value.id_promo)
    {// Se actualiza
      this.promocionesServ.updatePromocion(this.formPromocion.value).subscribe(
        respuesta =>
        { // La respuesta se mostrara en consola
          console.log(respuesta);
          // Se refrescan los datos
          this.obtenerPromocion();
          // Se resetea el formulario
          this.formPromocion.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
    else {
      // El metodo guardarPromociones le enviara los datos, que recoge del formulario, al saveBodega
      this.promocionesServ.savePromocion(this.formPromocion.value).subscribe(
        resultado => {
          console.log(resultado);
          // Se refresca la grilla
          this.obtenerPromocion();
          // Se resetea el formulario
          this.formPromocion.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
  }
  // El atributo promociones sera del tipo Ipromociones, y respetara los datos que contenga esa interfaz
  editarPromocion(promocion: IPromocion)
  {
    // En formPromociones, van a ser seteados sus valores
    this.formPromocion.setValue(promocion);
  }

  eliminarPromocion(id: number)
  {
    // Preguntamos si fue confirmado
    if (confirm('Está seguro de realizar esta acción?')){
      this.promocionesServ.deletePromocion(id).subscribe(
        // Vamos a recibir una respuesta por parte del servicio
        respuesta => {
          console.log(respuesta);
          // Se refresca la grilla
          this.obtenerPromocion();
        },
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
      );
    }
  }
}
