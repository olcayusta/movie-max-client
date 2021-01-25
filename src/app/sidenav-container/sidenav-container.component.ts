import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openedStart(): void {
    document.body.style.overflow = 'hidden';
  }

  closedStart(): void {
    document.body.style.overflow = '';
  }
}
