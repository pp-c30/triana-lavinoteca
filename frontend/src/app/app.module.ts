import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodegasComponent } from './components/bodegas/bodegas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { DescuentoComponent } from './components/descuento/descuento.component';
import { ProductosComponent } from './components/productos/productos.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { VariedadesComponent } from './components/variedades/variedades.component';
import { ImageneshomeComponent } from './components/imageneshome/imageneshome.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';

import {HttpClientModule} from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    BodegasComponent,
    CategoriasComponent,
    DescuentosComponent,
    ProductosComponent,
    OpinionesComponent,
    PromocionesComponent,
    VariedadesComponent,
    ImageneshomeComponent,
    CabeceraComponent,
    CuerpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
