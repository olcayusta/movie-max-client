import {Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-horizontal-slider',
  templateUrl: './horizontal-slider.component.html',
  styleUrls: ['./horizontal-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalSliderComponent implements OnInit {
  @Input() items = [];

  @ViewChild('sliderElement', {static: true, read: ElementRef}) sliderElement: ElementRef<HTMLElement>;
  slider;

  scrollStatus = 2;

  @Input() title: string;
  @Input() type: string;

  constructor() {
  }

  ngOnInit(): void {
    this.slider = this.sliderElement.nativeElement;
  }

  back(): void {
    const maximumScrollLeft = this.slider.scrollWidth - this.slider.clientWidth;
    const hesap = this.slider.scrollLeft - this.slider.offsetWidth - 152;
    if (hesap < 0) {
      this.slider.scrollLeft -= this.slider.offsetWidth - 152;
      this.scrollStatus = 2;
    } else {
      this.slider.scrollLeft -= this.slider.offsetWidth - 152;
      this.scrollStatus = 0;
    }

  }

  next(): void {
    const maximumScrollLeft = this.slider.scrollWidth - this.slider.clientWidth;
    if ((maximumScrollLeft - this.slider.scrollLeft) < (this.slider.offsetWidth)) {
      this.slider.scrollLeft = maximumScrollLeft;
      this.scrollStatus = 1;
    } else {
      this.slider.scrollLeft += this.slider.offsetWidth - 152;
      this.scrollStatus = 0;
    }
  }
}
