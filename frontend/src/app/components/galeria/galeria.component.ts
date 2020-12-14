import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import {CategoriasService} from '../../services/categorias.service';
import { VariedadesService } from '../../services/variedades.service';
import { ICategoria } from 'src/app/models/Categoria';
import { IVariedad } from 'src/app/models/Variedad';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  lista_categoria: ICategoria[] = [];

  // tslint:disable-next-line: variable-name
  lista_variedad: IVariedad[] = [];

  // tslint:disable-next-line: variable-name
  lista_datos = [];

  buscarProducto: any;

  formFiltro: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private fd: FormBuilder, private serviceProducto: ProductosService, private route: Router, private serviceCategorias: CategoriasService, private serviceVariedades: VariedadesService) {
    this.formFiltro = this.fd.group({
      categoria: [0],
      variedad: [0]
    });
   }

  ngOnInit(): void {
    this.listarProducto();
    this.obtenerCategorias();
  }

  // tslint:disable-next-line: variable-name
  verMas(id_producto: number)
  {
    this.route.navigate(['/detalle-producto', id_producto]);
  }

  listarProducto()
  {
    this.serviceProducto.getProducto().subscribe(
      resultado =>
      {
        this.lista_datos = resultado;
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
  obtenerVariedades(id_cat: number, $event: any)
  {
    this.serviceVariedades.getVariedadPorCategoria(id_cat).subscribe(
      respuesta => {
        this.lista_variedad = respuesta;
        this.buscarProducto = $event.target.options[$event.target.options.selectedIndex].text;
      },
      error => console.log(error)
    );
  }
}
