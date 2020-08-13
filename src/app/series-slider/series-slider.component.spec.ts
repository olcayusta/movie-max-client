import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesSliderComponent } from './series-slider.component';

describe('SeriesSliderComponent', () => {
  let component: SeriesSliderComponent;
  let fixture: ComponentFixture<SeriesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
