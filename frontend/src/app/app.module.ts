import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavegacionComponent} from './components/navegacion/navegacion.component';
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
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { InicioComponent } from './components/inicio/inicio.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination';

import {NgxSpinnerModule} from 'ngx-spinner';
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DatosPrivadosComponent } from './components/datos-privados/datos-privados.component';


import { AngularEditorModule } from '@kolkov/angular-editor';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    BodegasComponent,
    CategoriasComponent,
    OpinionesComponent,
    ProductosComponent,
    PromocionesComponent,
    VariedadesComponent,
    DescuentosComponent,
    AdminImageneshomeComponent,
    GaleriaComponent,
    DetalleProductoComponent,
    RegistroComponent,
    IngresoComponent,
    InicioComponent,
    DatosPrivadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    NgxSpinnerModule,
    AngularEditorModule
  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
