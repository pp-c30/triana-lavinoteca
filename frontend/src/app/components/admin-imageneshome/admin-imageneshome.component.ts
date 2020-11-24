import { Component, OnInit } from '@angular/core';
import { ImageneshomeService } from '../../services/imageneshome.service';
import { IImageneshome } from '../../../../../backend/src/models/imageneshome';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

interface HtmlInputElement{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-admin-imageneshome',
  templateUrl: './admin-imageneshome.component.html',
  styleUrls: ['./admin-imageneshome.component.css']
})
export class AdminImageneshomeComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  listado_datos_imageneshome = [];

  // Este es un atributo del tipo FormGroup
  formImagenesHome: FormGroup;

  // Este es un atributo del tipo File (archivo)
  file: File;

  imagenPreview: string | ArrayBuffer;

  // servimageneshome: es una instancia que nos permitira acceder a los metodos que contiene la clase ImageneshomeService
  constructor(private servImageneshome: ImageneshomeService, private fb: FormBuilder) {

    this.formImagenesHome = this.fb.group({
        id_imagen: [],
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        estado: [, [Validators.required, Validators.minLength(1)]],
        archivo: ['']
    });

  }

  ngOnInit(): void {
    this.listarImagenesHome();
  }


  listarImagenesHome()
  {
    this.servImageneshome.getImagenesHome().subscribe(
      resultado => {
        this.listado_datos_imageneshome = resultado;
      },
      error => console.log(error)
    );
  }

  guardarEnImagenesHome()
  {
    this.servImageneshome.saveImagenesHome(this.formImagenesHome.value, this.file).subscribe(
      resultado => {
        console.log(resultado);
        this.imagenPreview = '';
        this.formImagenesHome.reset();
        this.listarImagenesHome();
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
