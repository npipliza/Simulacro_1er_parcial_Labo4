import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './pages/actor/alta-actor/alta-actor.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import {PeliculaAltaComponent} from './pages/pelicula/alta-pelicula/alta.component';
import { ListadoActorComponent } from './pages/actor/listado-actor/listado-actor.component';
import {PeliculaListadoComponent} from './pages/pelicula/listado-pelicula/listado-pelicula.component';


const routes: Routes = [
  {path:"", component: BienvenidoComponent},
  {path:"busqueda", component: BusquedaComponent},
  {path:"peliculas/alta", component: PeliculaAltaComponent},
  {path:"actor/alta", component: ActorAltaComponent},
  {path:"actor/listado", component: ListadoActorComponent},
  {path:"pelicula/listado", component: PeliculaListadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
