import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriasService} from '../../services/categorias.service';
import { ICategoria } from '../../models/Categoria';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  // Este es un atributo del tipo FormGroup
  formProducto: FormGroup;

  // tslint:disable-next-line: variable-name
  lista_categoria: ICategoria[] = [];

  constructor(private fb: FormBuilder, private serviceCategorias: CategoriasService)
  {
    this.formProducto = this.fb.group({
      nombre: ['', Validators.required],
      categoria: [null],
      stock: [null],
      precio: [null],
      variedad: [null],
      archivo: [''],
      bodega: [null],
      descripcion: [''],
      cantmil: [null],
      estado: [null],
    });
  }

  ngOnInit(): void {
    this.obtenerCategorias();
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
}
