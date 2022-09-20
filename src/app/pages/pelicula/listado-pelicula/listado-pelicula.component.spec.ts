import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaListadoComponent } from './listado-pelicula.component';

describe('PeliculaListadoComponent', () => {
  let component: PeliculaListadoComponent;
  let fixture: ComponentFixture<PeliculaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
