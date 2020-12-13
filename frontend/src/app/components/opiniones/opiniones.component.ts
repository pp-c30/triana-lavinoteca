import { Component, Input, OnInit } from '@angular/core';
import { OpinionesService } from '../../services/opiniones.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { IProducto } from '../../models/Producto';
import { IOpinion } from '../../models/Opinion';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  @Input() public id_producto: number;

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
  formOpiniones: FormGroup;

  // tslint:disable-next-line: variable-name
  lista_producto: IProducto[] = [];

  // tslint:disable-next-line: variable-name
  lista_opinion: IOpinion[] = [];

  // tslint:disable-next-line:variable-name
  listar_opinion_porproducto: IOpinion[] = [];

  // Este es un atributo del tipo any (acepta strings, numbers, etc).
  buscarOpinion: any;

  // tslint:disable-next-line: no-inferrable-types
  p: number = 1;

  constructor(private fb: FormBuilder, private serviceProducto: ProductosService, private serviceOpinion: OpinionesService)
   {
     this.formOpiniones = this.fb.group({
       id_producto : [0, Validators.required],
       cliente: [''],
       descripcion : ['', Validators.required]
     });
   }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerOpinion();
    this.obtenerOpinionporProducto();
    this.formOpiniones.get('id_producto').setValue(this.id_producto);
  }

  guardarOpinion()
  {
    this.serviceOpinion.saveOpinion(this.formOpiniones.value).subscribe(
      respuesta =>
      {
        this.formOpiniones.reset();
        this.obtenerOpinion();
        // console.log(respuesta);
      },
      error => console.log(error)
    );
  }

  obtenerOpinion()
  {
    this.serviceOpinion.getOpinion().subscribe(
      resultado => {
        this.lista_opinion = resultado;
      },
      error => console.log(error)
    );
  }

  obtenerOpinionporProducto()
  {
    this.serviceOpinion.getOpinionporProducto(this.id_producto).subscribe(
      resultado => {
        this.listar_opinion_porproducto = resultado;
      },
      error => console.log(error)
    );
  }

  eliminarOpinion(id: number)
  {
    // Preguntamos si fue confirmado
    if (confirm('Está seguro de realizar esta acción?')){
      this.serviceOpinion.deleteOpinion(id).subscribe(
        // Vamos a recibir una respuesta por parte del servicio
        respuesta => {
          console.log(respuesta);
          // Se refresca la grilla
          this.obtenerOpinion();
        },
      // Si hay un error, que este se imprima en consola
      error => console.log(error)
      );
    }
  }

  obtenerProductos()
  {
    this.serviceProducto.getProducto().subscribe(
      resultado => {
        this.lista_producto = resultado;
      },
      error => console.log(error)
    );
  }
}

