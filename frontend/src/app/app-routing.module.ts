import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodegasComponent } from './components/bodegas/bodegas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { DescuentoComponent } from './components/descuento/descuento.component';
import { ProductosComponent } from './components/productos/productos.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { VariedadesComponent } from './components/variedades/variedades.component';
import { AdminImageneshomeComponent } from './components/admin-imageneshome/admin-imageneshome.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

const routes: Routes = [
  {
    path: 'galeria', component: GaleriaComponent
  },
  {
    path: 'admin-imageneshome', component: AdminImageneshomeComponent
  },
  {
    path: 'bodegas', component: BodegasComponent
  },
  {
<<<<<<< HEAD
    // tslint:disable-next-line: quotemark
    path: "descuento", component: DescuentoComponent
=======
    path: 'categorias', component: CategoriasComponent
>>>>>>> 37c0ebb636ee477ef5458fba32b6b8545612b6b3
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
    path: '', redirectTo: '/galeria', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
