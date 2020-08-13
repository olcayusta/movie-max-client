import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialMoviesComponent } from './serial-movies.component';

describe('SerialMoviesComponent', () => {
  let component: SerialMoviesComponent;
  let fixture: ComponentFixture<SerialMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
