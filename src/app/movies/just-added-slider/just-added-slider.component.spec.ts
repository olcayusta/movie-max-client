import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustAddedSliderComponent } from './just-added-slider.component';

describe('JustAddedSliderComponent', () => {
  let component: JustAddedSliderComponent;
  let fixture: ComponentFixture<JustAddedSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustAddedSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustAddedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
