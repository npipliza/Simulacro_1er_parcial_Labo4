import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pages/pelicula/alta-pelicula/alta.component';
import { TablaPeliculaComponent } from './pages/pelicula/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './pages/pelicula/detalle-pelicula/detalle-pelicula.component';
import { ListadoActorComponent } from './pages/actor/listado-actor/listado-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    ListadoActorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
