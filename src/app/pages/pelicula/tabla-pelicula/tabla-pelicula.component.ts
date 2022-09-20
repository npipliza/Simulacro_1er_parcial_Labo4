import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoRecibido?: Pelicula[];
  @Output() EnviarUnaPelicula: EventEmitter<Pelicula> =
    new EventEmitter<Pelicula>();

  constructor() {}

  ngOnInit(): void {}

  EnviarPelicula(pelicula:Pelicula) {
    this.EnviarUnaPelicula.emit(pelicula);
    console.info(pelicula);
  }

}
