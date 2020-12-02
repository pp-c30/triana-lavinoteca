import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  lista_datos = [];

  constructor(private serviceProducto: ProductosService, private route: Router) { }

  ngOnInit(): void {
    this.listarProducto();
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
}
