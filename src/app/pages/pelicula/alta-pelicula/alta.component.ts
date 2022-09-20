import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  volver(){
    this.router.navigate(["/busqueda"]);
  }
  
  
}
