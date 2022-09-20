import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  listadoPeliculas: Pelicula[] = [new Pelicula(1,'Forrest Gump.','Comedia dramática.','6 de octubre de 1994',4545345,'../../../assets/forest.png'),
                                  new Pelicula(2,'Criadas y Señoras.','Drama.','12 de enero de 2012',345345,'../../../assets/criadas.png'),
                                  new Pelicula(3,'Valerian.','Ciencia Ficción','20 de julio de 2017',76544456,'../../../assets/valerian.png'),
                                  new Pelicula(4,'Tiempo.','Suspenso.','23 de julio de 2021',92545,'../../../assets/tiempo.png'),
                                  new Pelicula(5,'El Imperio contraataca.','Ciencia Ficción','31 de julio de 1980',85554234,'../../../assets/imperio.png'),];

  peliculaActiva: Pelicula = new Pelicula(0, '', '', '', 0, '');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  VerPeliculaSeleccionada($event: Pelicula) {
    this.peliculaActiva = $event;
    console.info($event);
  }

  altaPelicula(){
    this.router.navigate(["/peliculas/alta"]);
  }

  borrarPelicula(){
    
  }

}
