import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { IProducto } from '../../models/Producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  id_producto: number;

  unProducto: IProducto;

  constructor(private activatedRouter: ActivatedRoute, private serviceProducto: ProductosService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      params => {
       this.id_producto = params.id_producto;
      },
      error => console.error(error)
    );

    this.obtenerUnProducto(this.id_producto);
  }

  // tslint:disable-next-line: variable-name
  obtenerUnProducto(id_producto: number)
  {
    this.serviceProducto.getOneProducto(id_producto).subscribe(
      resultado => {
        this.unProducto = resultado;
      },
      error => console.log(error)
    );
  }

}
