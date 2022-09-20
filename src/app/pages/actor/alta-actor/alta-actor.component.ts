import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-actor-alta',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss']
})

export class ActorAltaComponent {

  constructor(private router: Router) {} 

ngOnInit(): void {}


}
