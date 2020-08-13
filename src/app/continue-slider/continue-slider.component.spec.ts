import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueSliderComponent } from './continue-slider.component';

describe('ContinueSliderComponent', () => {
  let component: ContinueSliderComponent;
  let fixture: ComponentFixture<ContinueSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
