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
import { AngularEditorConfig } from '@kolkov/angular-editor';

interface HtmlInputElement{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [],
      // ['fontSize']
    ]
};

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

   // Este es un atributo del tipo any (acepta strings, numbers, etc).
  buscarProducto: any;

  // tslint:disable-next-line: no-inferrable-types
  p: number = 1;

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private serviceCategorias: CategoriasService, private serviceProductos: ProductosService, private serviceBodegas: BodegasService, private serviceVariedades: VariedadesService, private spinner: NgxSpinnerService)
  {
    this.formProducto = this.fb.group({
      id_producto: [null],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      categoria: [0, [Validators.required, Validators.minLength(1)]],
      stock: [null, [Validators.required, Validators.minLength(1)]],
      precio: [null, [Validators.required, Validators.minLength(2)]],
      variedad: [0, [Validators.required, Validators.minLength(1)]],
      archivo: [''],
      bodega: [0, [Validators.required, Validators.minLength(1)]],
      descripcion: ['', Validators.required],
      cantmil: [null, [Validators.required, Validators.minLength(2)]],
      estado: [-1, [Validators.required, Validators.minLength(1)]],
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

  guardarProducto(){
    if (this.formProducto.value.id_producto)
    {
      this.serviceProductos.updateProducto(this.formProducto.value, this.file).subscribe(
        resultado => {
          console.log(resultado);
          this.imagenPreview = '';
          this.formProducto.reset();
          this.listarProducto();
          this.formProducto.get('categoria').setValue(0);
          this.formProducto.get('bodega').setValue(0);
          this.formProducto.get('estado').setValue(-1);
          this.spinner.hide();
        },
        error => console.log(error)
      );
    }
    else {
      this.serviceProductos.saveProducto(this.formProducto.value, this.file).subscribe(
        resultado => {
          console.log(resultado);
          this.imagenPreview = '';
          this.listarProducto();
          // Se resetea el formulario
          this.formProducto.reset();
          this.formProducto.get('categoria').setValue(0);
          this.formProducto.get('bodega').setValue(0);
          this.formProducto.get('estado').setValue(-1);
        },
        error => console.log(error)
      );
    }
  }

  editarProducto(producto: IProducto){
    this.formProducto.setValue({
      id_producto: producto.id_producto,
      nombre: producto.nombre,
      categoria: producto.id_cat,
      stock: producto.stock,
      precio: producto.precio,
      variedad: producto.id_varie,
      archivo: '',
      bodega: producto.id_bod,
      descripcion: producto.descripcion,
      cantmil: producto.cantmil,
      estado: producto.estado,
    });

    this.imagenPreview = producto.imagen;
  }


  eliminarProducto(producto: IProducto){
    if (confirm('¿Esta seguro que desea eliminar estos datos?'))
    {
      this.spinner.show();
      this.serviceProductos.deleteProducto(producto).subscribe(
        resultado =>
        {
          console.log(resultado);
          this.listarProducto();
          this.spinner.hide();
        },
        error => console.log(error)
      );
    }
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
