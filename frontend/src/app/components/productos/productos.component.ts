import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  // Este es un atributo del tipo FormGroup
  formProducto: FormGroup;

  constructor(private fb: FormBuilder)
  {
    this.formProducto = this.fb.group({
      nombre: [''],
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

  ngOnInit(): void {}
}
