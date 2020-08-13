import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
