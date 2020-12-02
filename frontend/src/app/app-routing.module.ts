import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodegasComponent } from './components/bodegas/bodegas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { VariedadesComponent } from './components/variedades/variedades.component';
import { AdminImageneshomeComponent } from './components/admin-imageneshome/admin-imageneshome.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

const routes: Routes = [
  {
    path: 'catalogo', component: GaleriaComponent
  },
  {
    path: 'detalle-producto/:id_producto', component: DetalleProductoComponent
  },
  {
    path: 'admin-imageneshome', component: AdminImageneshomeComponent
  },
  {
    path: 'bodegas', component: BodegasComponent
  },
  {
    path: 'categorias', component: CategoriasComponent
  },
  {
    path: 'descuentos', component: DescuentosComponent
  },
  {
    path: 'productos', component: ProductosComponent
  },
  {
    path: 'opiniones', component: OpinionesComponent
  },
  {
    path: 'promociones', component: PromocionesComponent
  },
  {
    path: 'variedades', component: VariedadesComponent
  },
  {
    path: '', redirectTo: '/catalogo', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
