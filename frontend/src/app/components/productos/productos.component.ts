import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IProducto } from 'src/app/models/Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  listProducto: IProducto[] = [];

  // Este es un atributo del tipo FormGroup
  formProducto: FormGroup;

  // Este es un atributo del tipo any (acepta strings, numbers, etc).
  buscarProducto: any;

  // tslint:disable-next-line: no-inferrable-types
  p: number = 1;

   /* bodegasServ: es una instancia que nos permitira acceder a los metodos que contiene la clase BodegasService
   fb: este atributo es una instancia de la clase FormBuilder*/
  constructor(private productoServ: ProductosService, private fb: FormBuilder) {
    // Construcción del formulario
    this.formProducto = this.fb.group({
      id_producto: [null],
      nombre: ['', [Validators.required, Validators.minLength(6)]],
      categoria: ['', [Validators.required, Validators.minLength(6)]],
      stock: ['', [Validators.required, Validators.minLength(6)]],
      precio: ['', [Validators.required, Validators.minLength(6)]],
      variedad: ['', [Validators.required, Validators.minLength(6)]],
      imagen: ['', [Validators.required, Validators.minLength(6)]],
      bodega: ['', [Validators.required, Validators.minLength(6)]],
      descripcion: ['', [Validators.required, Validators.minLength(6)]],
      cantmil: ['', [Validators.required, Validators.minLength(6)]],
      estado: ['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit(): void {
    this.obtenerProducto();
  }
  // Es un metodo que se ejecuta al iniciar la pagina, y nos mostrara una lista
  obtenerProducto(){
    this.productoServ.getProducto().subscribe(
      resultado => this.listProducto = resultado,
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
    );
  }

  guardarProducto(){
    if (this.formProducto.value.id_producto)
    {// Se actualiza
      this.productoServ.updateProducto(this.formProducto.value).subscribe(
        respuesta =>
        { // La respuesta se mostrara en consola
          console.log(respuesta);
          // Se refrescan los datos
          this.obtenerProducto();
          // Se resetea el formulario
          this.formProducto.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
    else {
      // El metodo guardarBodega le enviara los datos, que recoge del formulario, al saveBodega
      this.productoServ.saveProducto(this.formProducto.value).subscribe(
        resultado => {
          console.log(resultado);
          // Se refresca la grilla
          this.obtenerProducto();
          // Se resetea el formulario
          this.formProducto.reset();
        },
        // Si hay un error, que este se imprima en consola
        error => console.log(error)
      );
    }
  }

  // El atributo bodega sera del tipo IBodega, y respetara los datos que contenga esa interfaz
  editarProducto(producto: IProducto)
  {
    // En formBodega, van a ser seteados sus valores
    this.formProducto.setValue(producto);
  }

  eliminarProducto(id: number)
  {
    // Preguntamos si fue confirmado
    if (confirm('Está seguro de realizar esta acción?')){
      this.productoServ.deleteProducto(id).subscribe(
        // Vamos a recibir una respuesta por parte del servicio
        respuesta => {
          console.log(respuesta);
          // Se refresca la grilla
          this.obtenerProducto();
        },
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
      );
    }
  }

}
