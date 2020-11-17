import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodegasComponent } from './components/bodegas/bodegas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { VariedadesComponent } from './components/variedades/variedades.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';


const routes: Routes = [
  {
    // tslint:disable-next-line: quotemark
    path: "cuerpo", component: CuerpoComponent
  },
  {
    // tslint:disable-next-line: quotemark
    path: "bodegas", component: BodegasComponent
  },
  {
    // tslint:disable-next-line: quotemark
    path: "categorias", component: CategoriasComponent
  },
  {
    // tslint:disable-next-line: quotemark
    path: "descuentos", component: DescuentosComponent
  },
  {
    // tslint:disable-next-line: quotemark
    path: "productos", component: ProductosComponent
  },
  {
    // tslint:disable-next-line: quotemark
    path: "opiniones", component: OpinionesComponent
  },
  {
    // tslint:disable-next-line: quotemark
    path: "promociones", component: PromocionesComponent
  },
  {
    // tslint:disable-next-line: quotemark
    path: "variedades", component: VariedadesComponent
  },
  {
    // tslint:disable-next-line: quotemark
    path: "**", pathMatch: 'full',  redirectTo: 'cuerpo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
