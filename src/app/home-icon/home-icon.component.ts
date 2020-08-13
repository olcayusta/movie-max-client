import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-icon',
  templateUrl: 'home-24px.svg',
  styleUrls: ['./home-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
