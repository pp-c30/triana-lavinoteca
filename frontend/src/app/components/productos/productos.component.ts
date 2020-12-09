import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriasService} from '../../services/categorias.service';
import { ICategoria } from '../../models/Categoria';
import { IProducto } from '../../models/Producto';
import { ProductosService } from '../../services/productos.service';
import {BodegasService} from '../../services/bodegas.service';
import { IBodega } from '../../models/Bodega';
import { VariedadesService } from '../../services/variedades.service';
import { IVariedad } from '../../models/Variedad';
import { NgxSpinnerService } from 'ngx-spinner';

interface HtmlInputElement{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  lista_producto: IProducto[] = [];

  // Este es un atributo del tipo FormGroup
  formProducto: FormGroup;

  // tslint:disable-next-line: variable-name
  lista_categoria: ICategoria[] = [];

  // tslint:disable-next-line: variable-name
  lista_bodega: IBodega[] = [];

  // tslint:disable-next-line: variable-name
  lista_variedad: IVariedad[] = [];

   // Este es un atributo del tipo File (archivo)
   file: File;

   imagenPreview: string | ArrayBuffer;

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private serviceCategorias: CategoriasService, private serviceProductos: ProductosService, private serviceBodegas: BodegasService, private serviceVariedades: VariedadesService)
  {
    this.formProducto = this.fb.group({
      nombre: ['', Validators.required],
      categoria: [0, Validators.required],
      stock: [null, Validators.required],
      precio: [null, Validators.required],
      variedad: [0, Validators.required],
      archivo: [''],
      bodega: [0, Validators.required],
      descripcion: ['', Validators.required],
      cantmil: [null, Validators.required],
      estado: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.obtenerBodegas();
    this.listarProducto();
  }

  obtenerBodegas(){
    this.serviceBodegas.getBodega().subscribe(
      resultado => {
        this.lista_bodega = resultado;
      },
      error => console.log(error)
    );
  }

  obtenerCategorias()
  {
    this.serviceCategorias.getCategoria().subscribe(
      respuesta => {
        this.lista_categoria = respuesta;
      },
      error => console.log(error)
    );
  }

  // tslint:disable-next-line: variable-name
  obtenerVariedades(id_cat: number)
  {
    this.serviceVariedades.getVariedadPorCategoria(id_cat).subscribe(
      respuesta => {
        this.lista_variedad = respuesta;
      },
      error => console.log(error)
    );
  }

  listarProducto()
  {
    this.serviceProductos.getProducto().subscribe(
      resultado => {
        this.lista_producto = resultado;
      },
      error => console.log(error)
    );
  }

  mostrarFotoSeleccionada(evento: HtmlInputElement)
  {
    // aca realizaremos la lectura de la foto
     // preguntamos si existe al menos una imagen y si es asi preguntamos si existe la primera imagen
     if (evento.target.files && evento.target.files[0])
     {
       this.file = evento.target.files[0];

       // usamos reader que es una herramienta del navegador para lograr leer archivos
       const reader = new FileReader();

       /**
        * Configuramos reader para que al momento de hacer la lectura sepa donde guardar la misma
        * En este caso la vamos a guardar dentro de un atributo llamada imagenPreview
        */
       reader.onload = (e) =>
       {
          this.imagenPreview = reader.result;
       };

       // Finalmente le decimos cual es el archivo que tiene que leer para mostrar como vista previa
       // Se ejecuta la lectura
       reader.readAsDataURL(this.file);
     }
  }
}
